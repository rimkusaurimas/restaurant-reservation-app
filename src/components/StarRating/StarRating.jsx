import React from "react";
import PropTypes from "prop-types";
import styles from "./star-rating.module.scss";
import { Icon } from "components/iconSprite/Icon";
import cx from "classnames";

export const StarRating = ({ rating, className }) => {
  const ratingNumber = rating ? rating : "-";
  return (
    <div className={cx(className, styles.rating)}>
      <Icon className={styles.ratingIcon} name="icon-action-star-filled" />
      <p className={styles.ratingNumber}>{ratingNumber}</p>
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number,
  className: PropTypes.string,
};
