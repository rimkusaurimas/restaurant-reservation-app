import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "features/context";
import cx from "classnames";
import styles from "./user-profile-widget.module.scss";
import imageMark from "assets/image-mark.png";
import { MenuItem } from "components/UserProfileWidget";
import { Icon } from "components/iconSprite/Icon";

export const UserProfileWidget = () => {
  let [isMenuVisible, setIsMenuVisible] = useState(false);
  const { userData, logOutUser } = useContext(UserContext);
  let userImgSrc = userData.userImage ? userData.userImage : "";

  const toggleMenu = () => {
    setIsMenuVisible((showMenuOld) => {
      return (isMenuVisible = !showMenuOld);
    });
  };

  const toggleMenuOnWindowClick = () => {
    if (isMenuVisible) {
      setIsMenuVisible((showMenuOld) => {
        return (isMenuVisible = !showMenuOld);
      });
    }
  };

  useEffect(() => {
    if (isMenuVisible) {
      document.body.addEventListener("click", toggleMenuOnWindowClick);
    }
    return () => {
      window.removeEventListener("click", toggleMenuOnWindowClick);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMenuVisible]);

  return (
    <div className={styles.userProfileWidget}>
      <Icon
        name="icon-notification"
        size="large"
        className={styles.notificationIcon}
      />
      <button
        type="button"
        onClick={toggleMenu}
        className={styles.userProfileWidgetMenuButton}
      >
        <img
          src={userImgSrc}
          alt=""
          className={styles.userProfileWidgetImage}
        />
        <img
          src={imageMark}
          alt="icon"
          className={styles.userProfileWidgetMark}
        />
      </button>
      <div
        className={cx(styles.userProfileMenu, {
          isActive: isMenuVisible,
        })}
      >
        <span className={styles.userProfileMenuPointer}>{}</span>
        <div className={styles.userProfileMenuButtons}>
          <MenuItem title="Settings" stylesClass="topButton" />
          <MenuItem
            title="Log out"
            stylesClass="bottomButton"
            onClick={logOutUser}
          />
        </div>
      </div>
    </div>
  );
};
