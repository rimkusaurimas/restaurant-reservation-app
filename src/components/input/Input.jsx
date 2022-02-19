import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./input.module.scss";

export const Input = ({
  id,
  type,
  placeHolder,
  labelText,
  isError,
  disabled,
  value,
  errorMessage,
  name,
  register,
  required,
  onChange,
}) => {
  return (
    <div className={styles.container}>
      <label
        className={cx(styles.label, { [styles.labelIsDisabled]: disabled })}
        htmlFor={id}
      >
        {labelText}
      </label>
      <input
        id={id}
        name={name}
        className={cx(styles.field, { [styles.fieldHasError]: isError })}
        type={type}
        placeholder={placeHolder}
        disabled={disabled}
        value={value}
        {...register(labelText, { required, onChange: onChange })}
      />
      {errorMessage === "required" && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
      {isError && !disabled && (
        <div className={styles.errorMessage}>{errorMessage}</div>
      )}
    </div>
  );
};

Input.defaultProps = {
  type: "text",
  placeHolder: "placeholder",
  labelText: "label",
  isError: false,
  disabled: false,
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  type: PropTypes.oneOf(["text", "email", "password"]),
  placeHolder: PropTypes.string,
  labelText: PropTypes.string,
  isError: PropTypes.bool,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
  errorMessage: PropTypes.string,
  register: PropTypes.func,
  required: PropTypes.bool,
};
