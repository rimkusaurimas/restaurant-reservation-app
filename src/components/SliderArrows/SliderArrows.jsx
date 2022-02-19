import React from "react";
import PropTypes from "prop-types";
import styles from "./slider-navigation-button.module.scss";
import cx from "classnames";
import { Icon } from "components/iconSprite/Icon";

export const SliderArrows = ({ type = "button", next, prev }) => {
  return (
    <div>
      <button
        type={type}
        className={cx(styles.btn, styles.left)}
        onClick={prev}
      >
        <Icon name="icon-left-arrow" size="large" />
      </button>
      <button
        type={type}
        className={cx(styles.btn, styles.right)}
        onClick={next}
      >
        <Icon name="icon-right-arrow" size="large" />
      </button>
    </div>
  );
};

SliderArrows.propTypes = {
  type: PropTypes.oneOf(["button"]),
  next: PropTypes.func,
  prev: PropTypes.func,
};
