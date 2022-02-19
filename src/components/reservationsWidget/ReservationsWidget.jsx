import React from "react";
import PropTypes from "prop-types";
import styles from "./reservationsWidget.module.scss";
import bookImage from "assets/book.png";
import deviceImage from "assets/device.png";
import doorImage from "assets/door.png";
import { ReservationsItem } from "components/reservationsWidget";
import { Link } from "react-router-dom";

const itemsConfig = [
  {
    initData: {
      title: "Meeting rooms",
      img: doorImage,
      alt: "meeting rooms reservation",
      path: "reservations/meeting-rooms",
    },
    dataKey: "rooms",
  },
  {
    initData: {
      title: "Devices",
      img: deviceImage,
      alt: "device reservation",
      path: "reservations/devices",
    },
    dataKey: "devices",
  },
  {
    initData: {
      title: "Books",
      img: bookImage,
      alt: "books reservation",
      path: "reservations/books",
    },
    dataKey: "books",
  },
];

export const ReservationsWidget = ({ data }) => {
  const items = itemsConfig.map(({ initData, dataKey }) => {
    return {
      ...initData,
      numberReserved: data.userData
        ? data.userData[0].reservations[dataKey].length
        : 0,
    };
  });

  return (
    <>
      <h3 className={styles.widgetHeader}>Reservations</h3>
      <ul className={styles.widgetListBox}>
        {items.map((item, index) => (
          <li
            key={`${item.title}-${index}`}
            className={styles.widgetListBoxItem}
          >
            <Link to={item.path} className={styles.widgetLink}>
              <ReservationsItem item={item} />
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

ReservationsWidget.propTypes = { data: PropTypes.object };
