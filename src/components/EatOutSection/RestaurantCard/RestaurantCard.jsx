import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { BlankCard } from "components/EatOutSection";
import { CheckIn } from "components/CheckIn/CheckIn";
import { FavoriteButton } from "components/favoriteButton/FavoriteButton";
import { StarRating } from "components/StarRating/StarRating";
import { Icon } from "components/iconSprite/Icon";
import { useAPI } from "features/context/APIContext";

import styles from "./restaurant-card.module.scss";

export const RestaurantCard = ({ data, className, renderMoreInfo = false }) => {
  const [, , dispatch] = useAPI();
  const {
    categories,
    image,
    name,
    openingHours,
    checkIns,
    rating,
    id,
    isLiked,
  } = data;
  const restaurantLink = `/eat-out/${id}`;

  const WorkingDays = openingHours ? (
    openingHours.map((item, i) => (
      <p
        key={`${item.days}${i}`}
        className={styles.workingDays}
      >{`${item.days}: ${item.hours}`}</p>
    ))
  ) : (
    <br />
  );

  const description = data.description;

  return (
    <BlankCard className={className}>
      <div className={styles.card} style={{ backgroundImage: `url(${image})` }}>
        {!renderMoreInfo && (
          <div className={styles.cardTopWrapper}>
            <CheckIn count={checkIns} />
            <StarRating rating={rating} />
          </div>
        )}
        {renderMoreInfo && (
          <div className={styles.cardTopWrapperNewPlaces}>
            <StarRating rating={rating} />
          </div>
        )}

        <div className={styles.lowerWrapper}>
          <div className={styles.details}>
            <div className={styles.topTextWrapper}>
              {categories &&
                categories.slice(0, 3).map((category, index) => (
                  <p key={`${category}-${index}`} className={styles.topText}>
                    {category}
                  </p>
                ))}
            </div>
            <div className={styles.titleWrapper}>
              <Link to={restaurantLink} className={styles.title}>
                {name}
              </Link>
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
            <div className={styles.workingDaysWrapper}>{WorkingDays}</div>
          </div>
        </div>
      </div>
      {renderMoreInfo && (
        <div className={styles.bottomText}>
          <div className={styles.bottomTextWebsite}>
            <Icon
              className={styles.icon}
              name="icon-location-globe"
              size="medium"
            />
            <a
              className={styles.bottomTextWebsiteLink}
              href={data.website}
              rel="noopener noreferrer"
              target="_blank"
            >
              {data.website.split("/")[2]}
            </a>
          </div>
          <div className={styles.bottomTextLocation}>
            <Icon
              className={styles.icon}
              name="icon-location-map-pin"
              size="medium"
            />
            {data.location.address}
          </div>
          <p className={styles.bottomTextDescription}>
            {description.length < 50
              ? `${description} `
              : `${description.substr(0, 110)}\u2026 `}
          </p>
          <div className={styles.readMore}>
            <a
              href={data.website}
              rel="noopener noreferrer"
              target="_blank"
              className={styles.readMoreLink}
            >
              Read More
            </a>
          </div>
        </div>
      )}
    </BlankCard>
  );
};

RestaurantCard.propTypes = {
  data: PropTypes.object,
  className: PropTypes.string,
  renderMoreInfo: PropTypes.bool,
};
