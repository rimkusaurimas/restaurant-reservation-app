import React, { useEffect, useState } from "react";

import {
  BreadCrumbs,
  PageContainer,
  Search,
  PaginatedResults,
} from "components";

import { useAPI } from "features";

import styles from "./Books.module.scss";

export const Books = () => {
  const [searchResults, setSearchResults] = useState([]);

  const [{ data }, getData] = useAPI();

  useEffect(() => {
    getData("books");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getSearchResults = (input) => {
    const searchInput = input.toUpperCase();
    const filteredBooks = data.books.bookList.filter(
      (book) => book.title.toUpperCase().indexOf(searchInput) > -1
    );
    setSearchResults(filteredBooks);
  };

  return (
    <PageContainer>
      <BreadCrumbs />
      <h1 className={styles.sectionHeading}>Book reservations</h1>
      <Search handleSearch={getSearchResults} />
      <PaginatedResults itemsPerPage={7} searchResults={searchResults} />
    </PageContainer>
  );
};
