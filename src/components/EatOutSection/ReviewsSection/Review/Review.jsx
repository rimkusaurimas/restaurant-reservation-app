import React from "react";
import PropTypes from "prop-types";

import { StarRating } from "components";

import styles from "./Review.module.scss";

//TODO add load more reviews button and decide on how to handle text inside the card when the review is too long.

export const Review = ({ data }) => (
  <div className={styles.review}>
    <div className={styles.reviewRatingWrapper}>
      <StarRating rating={data.rating} className={styles.reviewStarRating} />
    </div>
    <p className={styles.reviewUsername}>{data.userName}</p>
    <p className={styles.reviewComment}>{data.comment}</p>
  </div>
);

Review.propTypes = {
  data: PropTypes.object,
};
