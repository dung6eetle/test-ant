import classes from "../../classes/NewPage.module.css";
import Pagination from "../common/Pagination";
import React from "react";

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
      <div className={classes.new_page}>
        {props.items.map((i) => (
          <div className={classes.page_container}>
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
                className={classes.card_img}
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
