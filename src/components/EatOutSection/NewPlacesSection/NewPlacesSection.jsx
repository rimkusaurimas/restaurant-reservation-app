import React, { useState } from "react";
import styles from "./new-places-section.module.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { SliderArrows } from "components/SliderArrows/SliderArrows";
import { RestaurantCard } from "../RestaurantCard/RestaurantCard";
import PropTypes from "prop-types";

const sliderSettingsNewPlaces = {
  slidesToShow: 3,
  slidesToScroll: 3,
  infinite: true,
  dots: false,
  arrows: false,
};

export const NewPlacesSection = ({ data }) => {
  const [sliderPlacesRef, setSliderPlacesRef] = useState(null);

  const nextPlacesSlide = () => {
    sliderPlacesRef.slickNext();
  };

  const prevPlacesSlide = () => {
    sliderPlacesRef.slickPrev();
  };

  const sortedRestaurants = data?.restaurants
    ? [...data.restaurants].sort((a, b) =>
        a.createdDate > b.createdDate ? -1 : 1
      )
    : [];

  return (
    <>
      <div className={styles.newPlacesTop}>
        <h2 className={styles.newPlacesTopTitle}>New places</h2>
        <SliderArrows next={nextPlacesSlide} prev={prevPlacesSlide} />
      </div>
      <div className={styles.newPlacesSlidesContainer}>
        <Slider ref={setSliderPlacesRef} {...sliderSettingsNewPlaces}>
          {sortedRestaurants.map((restaurant) => (
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

NewPlacesSection.propTypes = {
  data: PropTypes.object,
};
