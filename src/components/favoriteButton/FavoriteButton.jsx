import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import { IconHeart } from "components/icon";
import styles from "./favoriteButton.module.scss";

export const FavoriteButton = ({ isFavorite, onClick }) => {
  return (
    <IconHeart
      onClick={onClick}
      className={cx(styles.heart, { [styles.heartIsFilled]: isFavorite })}
    />
  );
};

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool,
  onClick: PropTypes.func,
};
