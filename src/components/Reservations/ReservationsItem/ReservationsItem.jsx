import React from "react";
import PropTypes from "prop-types";

import { Button, BlankCard, StarRating } from "components";

import styles from "./ReservationsItem.module.scss";

export const ReservationsItem = ({
  data: { name, title, brand, author, image, quantity, rating, bookedUntil },
}) => (
  <BlankCard className={styles.reservationCard}>
    <img
      className={styles.reservationImage}
      src={image}
      alt="Reservation item"
    />
    <div className={styles.reservationInfoSection}>
      <div>
        <p className={styles.reservationSubtext}>{brand || author}</p>
        <h3 className={styles.reservationInfoName}>{name || title}</h3>
        <p className={styles.reservationInfoAvailability}>
          {(name && quantity && bookedUntil < quantity) ||
          (!bookedUntil && author)
            ? "Available"
            : "Unavailable"}
        </p>
      </div>
      <div className={styles.reservationFooter}>
        {rating ? (
          <StarRating rating={Math.round(rating.score * 10) / 10} />
        ) : (
          <p className={styles.reservationSubtext}>Quantity: {quantity}</p>
        )}
        <div className={styles.reservationFooterButtons}>
          <Button kind="text">View more</Button>
          <Button>Book</Button>
        </div>
      </div>
    </div>
  </BlankCard>
);

ReservationsItem.propTypes = {
  data: PropTypes.object,
};
