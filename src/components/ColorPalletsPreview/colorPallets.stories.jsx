import React from "react";
import styles from "./color-pallets.module.scss";
import cx from "classnames";

export const ColorPallets = () => {
  return (
    <div className={styles.container}>
      <div className={styles.colorNames}>
        $color-black
        <div className={cx(styles.circle, styles.colorBlack)}></div>
      </div>

      <div className={styles.colorNames}>
        $color-midnight
        <div className={cx(styles.circle, styles.colorMidnight)}></div>
      </div>

      <div className={styles.colorNames}>
        $color-fiord
        <div className={cx(styles.circle, styles.colorFiord)}></div>
      </div>

      <div className={styles.colorNames}>
        $color-slate-gray
        <div className={cx(styles.circle, styles.colorSlateGray)}></div>
      </div>

      <div className={styles.colorNames}>
        $color-gray-chateau
        <div className={cx(styles.circle, styles.colorGrayChateau)}></div>
      </div>

      <div className={styles.colorNames}>
        $color-ghost
        <div className={cx(styles.circle, styles.colorGhost)}></div>
      </div>

      <div className={styles.colorNames}>
        $color-iron
        <div className={cx(styles.circle, styles.colorIron)}></div>
      </div>

      <div className={styles.colorNames}>
        $color-porcelain-dark
        <div className={cx(styles.circle, styles.colorPorcelainDark)}></div>
      </div>

      <div className={styles.colorNames}>
        $color-porcelain
        <div className={cx(styles.circle, styles.colorPorcelain)}></div>
      </div>

      <div className={styles.colorNames}>
        $color-electric-violet
        <div className={cx(styles.circle, styles.colorElectricViolet)}></div>
      </div>

      <div className={styles.colorNames}>
        $color-magic-mint
        <div className={cx(styles.circle, styles.colorMagicMint)}></div>
      </div>

      <div className={styles.colorNames}>
        $color-wild-watermelon
        <div className={cx(styles.circle, styles.colorWildWatermelon)}></div>
      </div>

      <div className={styles.colorNames}>
        $color-malibu
        <div className={cx(styles.circle, styles.colorMalibu)}></div>
      </div>

      <div className={styles.colorNames}>
        $color-energy-yellow
        <div className={cx(styles.circle, styles.colorEnergyYellow)}></div>
      </div>

      <div className={styles.colorNames}>
        $color-muave
        <div className={cx(styles.circle, styles.colorMuave)}></div>
      </div>

      <div className={styles.colorNames}>
        $color-mirage
        <div className={cx(styles.circle, styles.colorMirage)}></div>
      </div>
    </div>
  );
};

export default {
  title: "Example / Color Pallets Preview",
  component: ColorPallets,
};
