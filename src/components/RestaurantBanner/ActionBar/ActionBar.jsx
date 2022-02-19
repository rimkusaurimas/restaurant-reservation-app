import React from "react";
import PropTypes from "prop-types";
import { FavoriteButton } from "components/favoriteButton";
import styles from "./ActionBar.module.scss";
import { StarRating } from "components/StarRating/StarRating";
import { useAPI } from "features/context/APIContext";

export const ActionBar = ({ checkIns, isLiked, rating, id }) => {
  const [, , dispatch] = useAPI();
  return (
    <div className={styles.box}>
      <div className={styles.actionGroup}>
        <StarRating rating={rating} />
        <FavoriteButton
          isFavorite={isLiked}
          onClick={() =>
            dispatch({
              type: "likeRestaurant",
              payload: { id: id },
            })
          }
        />
      </div>
      <p className="caption">
        {checkIns > 0
          ? `${checkIns} people already checked-in!`
          : "no one checked-in yet!"}
      </p>
      <div className={styles.actionGroup}></div>
    </div>
  );
};

ActionBar.propTypes = {
  checkIns: PropTypes.number,
  isLiked: PropTypes.bool,
  rating: PropTypes.number,
  id: PropTypes.string,
};
