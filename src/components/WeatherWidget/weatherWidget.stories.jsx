import React from "react";
import { withKnobs } from "@storybook/addon-knobs";
import { WeatherWidget } from "./WeatherWidget";

const mockedData = {
  weekDay: "Monday",
  type: "Cloudy",
  location: "Vilnius, Lithuania",
  degreesInCelsius: "+11",
  wind: "6 m/s",
  precipitation: "0 mm",
};

export const WeatherWidgetComponent = () => <WeatherWidget data={mockedData} />;

export default {
  title: "Components / Weather Widget",
  decorators: [withKnobs],
  component: WeatherWidget,
};
