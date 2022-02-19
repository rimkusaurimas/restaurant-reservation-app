import React, { useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Slide } from "components/EatOutSection";
import styles from "./hero-slider.module.scss";
import PropTypes from "prop-types";

export const HeroSliderSection = ({ data }) => {
  const [sliderHeroRef, setSliderHeroRef] = useState(null);

  const nextHeroSlide = () => {
    sliderHeroRef.slickNext();
  };

  const prevHeroSlide = () => {
    sliderHeroRef.slickPrev();
  };

  const sliderSettings = {
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    dots: false,
  };

  return (
    <>
      <h1 className={styles.sliderTitle}>Hungry? Find the best place!</h1>
      <Slider ref={setSliderHeroRef} {...sliderSettings}>
        {data.restaurants?.map((restaurant) => (
          <Slide
            key={restaurant.id}
            restaurant={restaurant}
            next={nextHeroSlide}
            prev={prevHeroSlide}
          />
        ))}
      </Slider>
    </>
  );
};

HeroSliderSection.propTypes = {
  data: PropTypes.object,
};
