import React from "react";
import PropTypes from "prop-types";
import styles from "./formHeader.module.scss";

export const FormHeader = ({ title, subtitle }) => {
  return (
    <div>
      <div className={styles.headerBox}>
        <h3 className={styles.headerBoxTitle}>{title}</h3>
        <p className={styles.headerBoxSubtitle}>{subtitle}</p>
      </div>
    </div>
  );
};

FormHeader.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};
