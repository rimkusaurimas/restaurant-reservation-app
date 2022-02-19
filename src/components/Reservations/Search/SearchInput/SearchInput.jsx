import React from "react";
import PropTypes from "prop-types";

import { Icon } from "components";

import styles from "./SearchInput.module.scss";

export const SearchInput = (props) => (
  <div className={styles.inputWrapper}>
    <label className={styles.searchIcon} htmlFor="searchInput">
      <Icon name="icon-search" size="medium" />
    </label>
    <input
      onChange={props.onChange}
      className={styles.searchInput}
      name="search"
      id="searchInput"
      type="text"
    />
  </div>
);

SearchInput.propTypes = {
  onChange: PropTypes.func,
};
