import classes from "../../classes/NewPage.module.css";
import Pagination from "../common/Pagination";
import React, { useState } from "react";

import NewPageModal from "./NewPageModal";

const NewPage = ({
  modalItem,
  modalIsOpened,
  currentPage,
  onPageChanged,
  totalItemsCount,
  pageSize,
  ...props
}) => {
  
  return (
    <>
      <div className={classes.newPage}>
        {props.items.map((i) => (
          <div className={classes.pageContainer}>
            <div
              className={classes.cards}
              onClick={() =>
                props.setModalPathAC({
                  image: i.image.name,
                  name: i.name,
                  description: i.description,
                })
              }
            >
              <img
                key={i.id}
                src={`http://gallery.dev.webant.ru/media/${i.image.name}`}
                className={classes.cardImg}
              ></img>
            </div>
          </div>
        ))}
      </div>
      {modalIsOpened ? (
        <main className={classes.main}>
          <NewPageModal closeModalAC={props.closeModalAC} modalIsOpened={modalIsOpened} modalItem={modalItem} />
        </main>
      ) : null }
      <Pagination
        currentPage={currentPage}
        onPageChanged={onPageChanged}
        totalItemsCount={totalItemsCount}
        pageSize={pageSize}
      />
    </>
  );
};
export default NewPage;
