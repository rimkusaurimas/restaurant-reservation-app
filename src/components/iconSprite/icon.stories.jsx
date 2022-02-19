import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { Icon } from "./Icon";

export default {
  title: "Components / Icons",
  decorators: [withKnobs],
  component: Icon,
};

export const Icons = () => {
  return (
    <div>
      <Icon name="icon-action-circle-pause" size="large" />
      <Icon name="icon-action-circle-play" size="large" />
      <Icon name="icon-action-circle-stop" size="large" />
      <Icon name="icon-book-bookmark" size="large" />
      <Icon name="icon-bookmark" size="large" />
      <Icon name="icon-chevron-singledown" size="large" />
      <Icon name="icon-heart" size="large" />
      <Icon name="icon-location-bookmark" size="large" />
      <Icon name="icon-location-compass" size="large" />
      <Icon name="icon-location-home" size="large" />
      <Icon name="icon-log-out" size="large" />
      <Icon name="icon-main-settings" size="large" />
      <Icon name="icon-notification" size="large" />
      <Icon name="icon-symbol-x" size="large" />
    </div>
  );
};
