import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";

import styles from "./check-in.module.scss";
import { Icon } from "components/iconSprite/Icon";

export const CheckIn = ({ count = 0 }) => {
  return (
    <div className={styles.wrapper}>
      <Icon name="icon-check-in-person" className={styles.icon} />
      <div className={cx(styles.count, styles.caption)}>{count}</div>
    </div>
  );
};

CheckIn.propTypes = {
  count: PropTypes.number,
};
