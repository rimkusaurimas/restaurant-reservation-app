import React from "react";
import PropTypes from "prop-types";
import styles from "./location.module.scss";
import cx from "classnames";
import { GoogleMap, useJsApiLoader, Marker } from "@react-google-maps/api";
import { Spinner } from "components/Spinner/Spinner";

function Location({ coordinates }) {
  const { isLoaded, loadError } = useJsApiLoader({
    googleMapsApiKey: process.env.REACT_APP_LOCATION_API_KEY,
  });

  const renderMap = () => {
    return (
      <GoogleMap
        mapContainerClassName={styles.locationContainerMap}
        center={coordinates}
        zoom={15}
      >
        {<Marker position={coordinates} />}
      </GoogleMap>
    );
  };

  return (
    <div className={styles.locationContainer}>
      <h2 className={cx(styles.locationContainerHeader, "heading2-alt")}>
        Location
      </h2>

      {loadError ? (
        <div className={cx(styles.locationContainerMap, styles.errorMessage)}>
          <p>Map cannot be loaded right now, sorry.</p>
        </div>
      ) : isLoaded ? (
        renderMap()
      ) : (
        <Spinner />
      )}
    </div>
  );
}

export default React.memo(Location);

Location.propTypes = {
  coordinates: PropTypes.object,
};
