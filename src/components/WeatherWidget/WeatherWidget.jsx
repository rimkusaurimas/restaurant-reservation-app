import React from "react";
import PropTypes from "prop-types";

import { BlankCard, Icon } from "components";
import { getFormattedDate, getWeatherIllustration } from "utils";

import styles from "./weather-widget.module.scss";

export const WeatherWidget = ({
  data: { location, degreesInCelsius, type, wind, precipitation },
}) => (
  <BlankCard className={styles.weatherCard}>
    <img
      className={styles.weatherIllustration}
      src={getWeatherIllustration(type)}
      alt={`${type} weather illustration`}
    />
    <div className={styles.weatherWrapper}>
      <div className={styles.weatherHeader}>
        <p className={styles.weatherHeaderLocationDate}>
          {getFormattedDate()}
          <span>&nbsp;|&nbsp;</span>
          {location}
        </p>
      </div>
      <div className={styles.weatherForecast}>
        <p className={styles.weatherForecastCelsius}>
          {degreesInCelsius.replace("+", "")}&#176;
        </p>
        <p className={styles.weatherForecastType}>{type}</p>
      </div>
      <hr className={styles.weatherDivider} />
      <div className={styles.weatherFooter}>
        <div className={styles.weatherFooterInfo}>
          <Icon name="icon-weather-wind" size="large" /> &nbsp;
          {wind}
        </div>

        <div className={styles.weatherFooterInfo}>
          <Icon name="icon-weather-droplet" size="large" /> &nbsp;
          {precipitation}
        </div>
      </div>
    </div>
  </BlankCard>
);

WeatherWidget.propTypes = {
  data: PropTypes.object,
};
