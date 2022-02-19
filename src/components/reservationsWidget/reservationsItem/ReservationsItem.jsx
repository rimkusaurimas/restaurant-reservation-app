import React from "react";
import PropTypes from "prop-types";
import styles from "./reservationsItem.module.scss";

export const ReservationsItem = ({ item }) => {
  return (
    <div className={styles.card}>
      <div className={styles.cardTextBox}>
        <h3 className={styles.cardTextBoxTitle}>{item.title}</h3>
        <p className={styles.cardTextBoxSubtitle}>
          {item.numberReserved} reserved
        </p>
      </div>
      <img src={item.img} alt={item.alt} className={styles.cardImg} />
    </div>
  );
};

ReservationsItem.propTypes = {
  item: PropTypes.object.isRequired,
};
