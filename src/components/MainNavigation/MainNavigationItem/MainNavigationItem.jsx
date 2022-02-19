import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cx from "classnames";
import styles from "./main-navigation-item.module.scss";
import { Icon } from "components/iconSprite/Icon";

export const MainNavigationItem = ({ title, iconId, path }) => {
  return (
    <>
      <Link to={path} className={cx(styles.navigationLink, "heading4")}>
        <Icon
          name={iconId}
          size="large"
          className={styles.navigationLinkIconBox}
        />
        {title}
      </Link>
    </>
  );
};

MainNavigationItem.propTypes = {
  title: PropTypes.string,
  children: PropTypes.any,
  iconId: PropTypes.string,
  path: PropTypes.string,
};
