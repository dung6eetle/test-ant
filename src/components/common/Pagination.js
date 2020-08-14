import React from "react";
import classes from "../../classes/Pagination.module.css";

const Paginator = ({
  totalItemsCount,
  pageSize,
  currentPage,
  onPageChanged,
}) => {
  let pagesCount = Math.ceil(totalItemsCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i);
  }
  return (
    <div className={classes.page_count_container}>
      {pages.map((p) => {
        return (
          <div className={classes.page_count}>
            <div
              key={p.id}
              className={
                currentPage === p ? classes.selected_page : classes.default_page
              }
              onClick={() => {
                onPageChanged(p);
              }}
            >
              {p}
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default Paginator;
