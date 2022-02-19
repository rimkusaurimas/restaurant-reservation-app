import React from "react";
import { Input } from "./Input";
import { text, boolean, select, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Components / Input",
  component: Input,
  decorators: [withKnobs],
};

const typeOptions = {
  Text: "text",
  Password: "password",
  Email: "email",
};

export const Default = () => {
  const isError = boolean("Error", false);
  const isDisabled = boolean("Disabled", false);

  return (
    <Input
      id="1"
      type={select("Type", typeOptions, "text")}
      labelText={text("Label text", "label")}
      placeHolder={text("Placeholder", "Placeholder")}
      isError={isError}
      disabled={isDisabled}
      errorMessage={text("Error Msg", "error")}
    />
  );
};
