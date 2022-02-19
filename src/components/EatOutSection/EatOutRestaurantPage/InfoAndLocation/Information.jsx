import React from "react";
import styles from "./information.module.scss";
import cx from "classnames";
import PropTypes from "prop-types";
import { BlankCard } from "components/EatOutSection/BlankCard/BlankCard";
import { Icon } from "components/iconSprite/Icon";

export const Information = ({ address, website, phone, openingHours }) => {
  const workingDays = openingHours.map((item, i) => (
    <div key={`openingHours-${i}`}>{`${item.days}: ${item.hours}`} </div>
  ));

  return (
    <div className={styles.container}>
      <h2 className={cx(styles.containerHeader, "heading2-alt")}>
        Information
      </h2>
      <BlankCard>
        <div className={styles.containerCard}>
          <div className={styles.containerItem}>
            <div className={styles.containerItemIcon}>
              <Icon name="icon-map-pin" size="large" />
            </div>
            <div>
              <h3 className={cx(styles.containerItemHeading, "heading3-alt")}>
                Address
              </h3>
              <div className={cx(styles.containerItemInfo, "caption")}>
                {address}
              </div>
            </div>
          </div>
          <div className={styles.containerItem}>
            <div className={styles.containerItemIcon}>
              <Icon name="icon-location-globe" size="large" />
            </div>
            <div>
              <h3 className={cx(styles.containerItemHeading, "heading3-alt")}>
                Website
              </h3>
              {website && (
                <a
                  className={cx(styles.containerItemInfo, "caption")}
                  href={website}
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  {website.split("/")[2]}
                </a>
              )}
              <a
                className={cx(styles.containerItemInfo, "caption")}
                href={website}
                rel="noopener noreferrer"
                target="_blank"
              >
                {website.split("/")[1]}
              </a>
            </div>
          </div>
          <div className={styles.containerItem}>
            <div className={styles.containerItemIcon}>
              <Icon name="icon-other-phone" size="large" />
            </div>
            <div>
              <h3 className={cx(styles.containerItemHeading, "heading3-alt")}>
                Phone Number
              </h3>
              <div className={cx(styles.containerItemInfo, "caption")}>
                {phone}
              </div>
            </div>
          </div>
          <div className={styles.containerItem}>
            <div className={styles.containerItemIcon}>
              <Icon name="icon-main-clock" size="large" />
            </div>
            <div>
              <h3 className={cx(styles.containerItemHeading, "heading3-alt")}>
                Work hours
              </h3>
              <div className={cx(styles.containerItemInfo, "caption")}>
                {workingDays}
              </div>
            </div>
          </div>
        </div>
      </BlankCard>
    </div>
  );
};

Information.propTypes = {
  address: PropTypes.string,
  website: PropTypes.string,
  phone: PropTypes.string,
  openingHours: PropTypes.array,
};
