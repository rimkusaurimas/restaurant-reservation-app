import React from "react";
import { Button } from "components/button";
import styles from "./browse-card-content.module.scss";

export const BrowseCardContent = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.wrapperTitle}>
        View all your favourite lunch spots and more
      </h3>
      <Button size={"small"} kind={"primary"}>
        Browse List
      </Button>
    </div>
  );
};
