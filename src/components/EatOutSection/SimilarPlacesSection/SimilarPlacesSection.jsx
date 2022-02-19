import React, { useState } from "react";
import PropTypes from "prop-types";

import { SliderArrows } from "components/SliderArrows/SliderArrows";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";

import styles from "./similar-places-section.module.scss";
import Slider from "react-slick";

export const SimilarPlacesSection = ({
  restaurants = [],
  currentRestaurant = {},
}) => {
  const [sliderPlacesRef, setSliderPlacesRef] = useState(null);

  let matchedCategoriesRestaurants = [];

  const restaurantsList = restaurants
    ? restaurants.filter((restaurant) => restaurant.id !== currentRestaurant.id)
    : [];

  restaurantsList.forEach((restaurant) => {
    const matchedCategories = restaurant.categories.filter((category) =>
      currentRestaurant.categories.includes(category)
    );

    if (matchedCategories.length > 0) {
      matchedCategoriesRestaurants.push({
        ...restaurant,
        matchedCategoriesCount: matchedCategories.length,
      });
    }
  });

  matchedCategoriesRestaurants.sort((firstEl, secondEl) =>
    firstEl.matchedCategoriesCount > secondEl.matchedCategoriesCount
      ? -1
      : secondEl.matchedCategoriesCount > firstEl.matchedCategoriesCount
      ? 1
      : 0
  );

  const nextPlacesSlide = () => {
    sliderPlacesRef.slickNext();
  };

  const prevPlacesSlide = () => {
    sliderPlacesRef.slickPrev();
  };

  const sliderSettingsNewPlaces = {
    slidesToShow: 3,
    slidesToScroll: 3,
    infinite: matchedCategoriesRestaurants.length > 2,
    dots: false,
    arrows: false,
  };

  return (
    <>
      <div className={styles.newPlacesTop}>
        <h2 className={"heading2-alt"}>Also you could like</h2>
        {matchedCategoriesRestaurants.length > 2 && (
          <SliderArrows next={nextPlacesSlide} prev={prevPlacesSlide} />
        )}
      </div>
      <div className={styles.newPlacesSlidesContainer}>
        <Slider ref={setSliderPlacesRef} {...sliderSettingsNewPlaces}>
          {matchedCategoriesRestaurants.map((restaurant) => (
            <RestaurantCard
              key={restaurant.id}
              data={restaurant}
              renderMoreInfo={true}
              className={styles.restaurantCard}
            />
          ))}
        </Slider>
      </div>
    </>
  );
};

SimilarPlacesSection.propTypes = {
  restaurants: PropTypes.array,
  currentRestaurant: PropTypes.object,
};
