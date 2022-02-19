import React from "react";
import styles from "./blank-card.module.scss";
import PropTypes from "prop-types";
import cx from "classnames";

export const BlankCard = ({ children, className }) => {
  return <section className={cx(className, styles.card)}>{children}</section>;
};

BlankCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};
