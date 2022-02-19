import React from "react";
import PropTypes from "prop-types";
import styles from "./eatOutSection.module.scss";
import { BrowseCard } from "components/EatOutSection";
import { RestaurantCard } from "components/EatOutSection";

export const EatOutSection = ({ data }) => {
  const bestTwoRestaurants = data?.restaurants
    ? [...data.restaurants]
        .sort((a, b) => (a.rating < b.rating ? 1 : -1))
        .slice(0, 2)
    : [];

  return (
    <ul className={styles.widgetListBox}>
      <li className={styles.widgetListBoxItem}>
        <BrowseCard />
      </li>
      {bestTwoRestaurants.map((restaurantData) => (
        <li key={restaurantData.id} className={styles.widgetListBoxItem}>
          <RestaurantCard data={restaurantData} />
        </li>
      ))}
    </ul>
  );
};

EatOutSection.propTypes = { data: PropTypes.object };
