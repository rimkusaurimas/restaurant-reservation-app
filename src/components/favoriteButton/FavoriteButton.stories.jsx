import React from "react";
import { FavoriteButton } from "./FavoriteButton";
import { withKnobs, boolean } from "@storybook/addon-knobs";

export default {
  title: "Components / FavoriteButton",
  component: FavoriteButton,
  decorators: [withKnobs],
};

export const Default = () => {
  const isFavorite = boolean("Is Favorite", false);
  return <FavoriteButton isFavorite={isFavorite} />;
};
