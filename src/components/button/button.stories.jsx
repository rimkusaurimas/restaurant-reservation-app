import React from "react";
import { Button } from "./Button";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Components / Button",
  decorators: [withKnobs],
  component: Button,
};

export const Primary = () => {
  return <Button kind="primary">{text("Label", "DEFAULT")}</Button>;
};

export const Primary_large = () => {
  return (
    <Button kind="primary" size="large">
      {text("Label", "DEFAULT")}
    </Button>
  );
};

export const Text = () => {
  return <Button kind="text">{text("Label", "DEFAULT")}</Button>;
};

export const Action = () => {
  return <Button kind="action">{text("Label", "X")}</Button>;
};

export const Action_large = () => {
  return (
    <Button kind="action" size="large">
      {text("Label", "X")}
    </Button>
  );
};
