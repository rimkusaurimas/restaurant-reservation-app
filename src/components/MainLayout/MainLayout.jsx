import React from "react";
import PropTypes from "prop-types";
import cx from "classnames";
import styles from "./main-layout.module.scss";
import logoDarkOutline from "assets/logo-dark-outline.png";
import { UserProfileWidget } from "components/UserProfileWidget";
import { MainNavigation } from "components/MainNavigation";

export const MainLayout = (props) => {
  const { children } = props;

  return (
    <>
      <header className={styles.header}>
        <div className={styles.navigationMeta}>
          <div className={styles.navigationMetaLogo}>
            <img
              src={logoDarkOutline}
              alt="logotype"
              className={styles.navigationMetaLogoImg}
            />
          </div>
          <div className={cx(styles.navigationMetaTeam, "heading5")}>
            <div>Team Inbif</div>
          </div>
        </div>
        <MainNavigation />
        <UserProfileWidget />
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <div className={styles.footerText}>copyright &copy; 2021 devbridge</div>
      </footer>
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};
