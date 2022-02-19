import React from "react";
import { LoginRegistrationLayout } from "./LoginRegistrationLayout";
import { FormHeader } from "./FormHeader";
import { text, withKnobs } from "@storybook/addon-knobs";

export default {
  title: "Components / LoginRegistrationLayout",
  component: LoginRegistrationLayout,
  decorators: [withKnobs],
};

export const Default = () => {
  return (
    <LoginRegistrationLayout>
      {
        <FormHeader
          title={text("Form Title", "login")}
          subtitle={text("Subtitle", "welcome back, please login.")}
        />
      }
    </LoginRegistrationLayout>
  );
};
