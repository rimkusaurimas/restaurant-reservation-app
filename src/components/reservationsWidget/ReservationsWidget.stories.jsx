import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { ReservationsWidget } from "./ReservationsWidget";
import { APIContextProvider } from "features/context/APIContext";

export default {
  title: "Components / ReservationsWidget",
  component: ReservationsWidget,
  decorators: [withKnobs],
};

export const Widget = () => {
  return (
    <>
      <APIContextProvider>
        <ReservationsWidget />
      </APIContextProvider>
    </>
  );
};
