import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./menu-item.module.scss";
import { Icon } from "components/iconSprite/Icon";

export const MenuItem = ({ title, stylesClass, linkTo = "#", onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cx(styles.button, "caption", {
        [styles.buttonTop]: stylesClass === "topButton",
        [styles.buttonBottom]: stylesClass === "bottomButton",
      })}
    >
      {stylesClass === "topButton" && (
        <Icon name="icon-main-settings" size="medium" />
      )}
      {stylesClass === "bottomButton" && (
        <Icon name="icon-log-out" size="medium" />
      )}
      <Link to={linkTo} className={styles.buttonLink}>
        {title}
      </Link>
    </button>
  );
};

MenuItem.propTypes = {
  title: PropTypes.string.isRequired,
  stylesClass: PropTypes.string.isRequired,
  linkTo: PropTypes.string,
  onClick: PropTypes.func,
};
