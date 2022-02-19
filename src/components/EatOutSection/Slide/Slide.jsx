import React from "react";
import { BlankCard } from "components/EatOutSection";
import styles from "./slide.module.scss";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { SliderArrows } from "components/SliderArrows";

export const Slide = ({ restaurant, next, prev }) => {
  const description = restaurant.description;

  return (
    <div className={styles.heroContainer}>
      <BlankCard>
        <div className={styles.cardContainer}>
          <div className={styles.imageContainer}>
            <img
              className={styles.imageContainerImage}
              src={restaurant.image}
              alt=""
            />
          </div>
          <div className={styles.cardInfo}>
            <div className={styles.cardInfoNavigation}>
              <SliderArrows next={next} prev={prev} />
            </div>
            <p className={styles.cardInfoIntro}>{restaurant.slogan}</p>
            <p className={styles.cardInfoTitle}>{restaurant.name}</p>
            <p className={styles.cardInfoDescription}>
              {description.length < 50
                ? `${description} `
                : `${description.substr(0, 120)}\u2026 `}
            </p>
            <Link to={restaurant.id} className={styles.cardInfoLink}>
              Read More
            </Link>
          </div>
        </div>
      </BlankCard>
    </div>
  );
};

Slide.propTypes = {
  restaurant: PropTypes.object,
  prev: PropTypes.func,
  next: PropTypes.func,
};
