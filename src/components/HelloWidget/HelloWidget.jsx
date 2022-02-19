import React, { useEffect, useState, useCallback, useContext } from "react";
import propTypes from "prop-types";
import styles from "components/HelloWidget/hello-widget.module.scss";

import { UserContext } from "features";

export const HelloWidget = ({ partofday }) => {
  const [clockState, setClockState] = useState();

  const { userData } = useContext(UserContext);

  const [firstName] = userData.userName.split(" ");

  const date = new Date();
  const curHr = date.getHours();
  if (curHr < 5 || curHr >= 21) {
    partofday = "evening";
  } else if (curHr < 12) {
    partofday = "morning";
  } else if (curHr < 17) {
    partofday = "afternoon";
  } else if (curHr < 21) {
    partofday = "evening";
  }

  const updateTime = useCallback(() => {
    const date = new Date();
    const formatedDate = date.toLocaleTimeString(["en-GB"], {
      hour: "2-digit",
      minute: "2-digit",
    });
    if (formatedDate !== clockState) setClockState(formatedDate);
  }, [clockState]);

  useEffect(() => {
    updateTime();
    const interval = setInterval(() => {
      updateTime();
    }, 1000);
    return () => clearInterval(interval);
  }, [updateTime]);
  return (
    <>
      <div className={styles.container}>
        <div className={styles.clock}>{clockState}</div>
        <div className={styles.text}>
          Good {partofday}, {firstName}!
        </div>
      </div>
    </>
  );
};

HelloWidget.propTypes = {
  username: propTypes.string,
  partofday: propTypes.string,
};
