import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import icons from "./icons.svg";

import styles from "./icon.module.scss";

const Size = {
  MEDIUM: "medium",
  LARGE: "large",
  FLUID: "fluid",
};

export const Icon = ({ name, size, className }) => {
  return (
    <svg
      className={cx(className, {
        [styles.icon]: true,
        [styles.iconIsMedium]: size === Size.MEDIUM,
        [styles.iconIsLarge]: size === Size.LARGE,
        [styles.iconIsFluid]: size === Size.FLUID,
      })}
    >
      <use href={`${icons}#${name}`} />
    </svg>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf([
    "icon-action-circle-pause",
    "icon-action-circle-play",
    "icon-action-circle-stop",
    "icon-check-in-person",
    "icon-chevron-singledown",
    "icon-heart",
    "icon-location-compass",
    "icon-location-bookmark",
    "icon-location-globe",
    "icon-location-home",
    "icon-log-out",
    "icon-map-pin",
    "icon-main-clock",
    "icon-main-settings",
    "icon-notification",
    "icon-notification-bell",
    "icon-other-phone",
    "icon-symbol-x",
    "icon-notification",
    "icon-action-star-filled",
    "icon-action-star",
    "icon-location-globe",
    "icon-location-map-pin",
    "icon-left-arrow",
    "icon-right-arrow",
    "icon-weather-wind",
    "icon-weather-droplet",
    "icon-other-gift",
    "icon-message-box-circle",
    "icon-search",
    "icon-search-light",
  ]),
  size: PropTypes.oneOf(Object.values(Size)),
  className: PropTypes.string,
};
