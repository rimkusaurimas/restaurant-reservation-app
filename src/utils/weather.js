import thunder from "assets/Illustrations/illustration-weather-thunder.svg";
import cloudy from "assets/Illustrations/illustration-weather-cloudy.svg";
import lightShower from "assets/Illustrations/illustration-weather-light-shower.svg";
import snow from "assets/Illustrations/illustration-weather-snow.svg";
import sunny from "assets/Illustrations/illustration-weather-sunny.svg";

export const getWeatherIllustration = (weatherCondition) => {
  switch (weatherCondition) {
    case "Thunderstorm":
      return thunder;
    case "Cloudy":
      return cloudy;
    case "Light shower":
      return lightShower;
    case "Snow":
      return snow;
    case "Sunny":
      return sunny;
    default:
  }
};
