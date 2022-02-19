import React, { useEffect, useState } from "react";
import ReactPaginate from "react-paginate";

import { ReservationsItem } from "../ReservationsItem";
import styles from "./PaginatedResults.module.scss";

import PropTypes from "prop-types";

export const PaginatedResults = ({ itemsPerPage, searchResults }) => {
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(searchResults.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(searchResults.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, searchResults]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % searchResults.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div>
        {currentItems &&
          currentItems.map((item) => (
            <div key={item.id} className={styles.reservationsItemContainer}>
              <ReservationsItem data={item} />
            </div>
          ))}
      </div>
      <ReactPaginate
        breakLabel="..."
        nextLabel="&gt;"
        onPageChange={handlePageClick}
        pageRangeDisplayed={2}
        marginPagesDisplayed={1}
        pageCount={pageCount}
        previousLabel="&lt;"
        renderOnZeroPageCount={null}
        className={styles.paginationContainer}
        pageClassName={styles.paginationList}
        nextClassName={styles.paginationArrow}
        previousClassName={styles.paginationArrow}
        breakClassName={styles.paginationBreak}
        pageLinkClassName={styles.paginationLink}
        activeLinkClassName={styles.paginationLinkActive}
        breakLinkClassName={styles.paginationLink}
        nextLinkClassName={styles.paginationLink}
        previousLinkClassName={styles.paginationLink}
        disabledLinkClassName={styles.paginationLinkDisabled}
      />
    </>
  );
};

PaginatedResults.propTypes = {
  itemsPerPage: PropTypes.number,
  searchResults: PropTypes.array,
};
