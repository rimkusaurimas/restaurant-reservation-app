import React, { useState } from "react";
import PropTypes from "prop-types";

import { Button, BlankCard, Icon } from "components";
import { SearchInput } from "./SearchInput";

import styles from "./Search.module.scss";

export const Search = ({ handleSearch }) => {
  const [searchInput, setSearchInput] = useState("");

  const handleInput = (event) => {
    setSearchInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSearch(searchInput);
  };

  return (
    <BlankCard className={styles.searchCard}>
      <h2 className={styles.searchHeading}>Search</h2>
      <form onSubmit={handleSubmit}>
        <div className={styles.inputRow}>
          <SearchInput onChange={handleInput} />
          <Button type="submit" size="large">
            <Icon
              className={styles.searchButtonIcon}
              name="icon-search-light"
              size="medium"
            />
            Search
          </Button>
        </div>
      </form>
    </BlankCard>
  );
};

Search.propTypes = {
  handleSearch: PropTypes.func,
};
