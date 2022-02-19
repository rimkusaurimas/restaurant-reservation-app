import React from "react";
import PropTypes from "prop-types";
import { ActionBar } from "components/RestaurantBanner/ActionBar";
import styles from "./RestaurantBanner.module.scss";
import { PageContainer } from "components/PageContainer/PageContainer";

export const RestaurantBanner = ({
  data: { name, categories, image, checkIns, isLiked, rating, id },
}) => {
  const imgStyle = {
    backgroundImage: `linear-gradient(89.13deg, #F6F7F8 0.75%, rgba(246, 247, 248, 0) 51.08%, #F6F7F8 99.25%), url(${image})`,
  };
  return (
    <div className={styles.banner}>
      <div className={styles.bannerImage} style={imgStyle} />
      <PageContainer className={styles.bannerItems}>
        <div className={styles.categories}>
          {categories.map((category, i) => (
            <div className={styles["category"]} key={i}>
              {category}
            </div>
          ))}
        </div>
        <h1 className={styles.title}>{name}</h1>
        <ActionBar
          checkIns={checkIns}
          isLiked={isLiked}
          rating={rating}
          id={id}
        />
      </PageContainer>
    </div>
  );
};

RestaurantBanner.propTypes = {
  data: PropTypes.object,
  restaurantId: PropTypes.string,
};
