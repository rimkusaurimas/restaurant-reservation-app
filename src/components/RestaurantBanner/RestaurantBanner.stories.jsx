import React from "react";
import { RestaurantBanner } from "./RestaurantBanner";

const data = {
  name: "Grill London (Kaunas, PLC Mega)",
  image:
    "https://images.unsplash.com/photo-1498579485796-98be3abc076e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
  categories: ["Burger", "Salads", "Grill"],
  checkIns: 8,
};

export default {
  title: "Components / RestaurantBanner",
  component: RestaurantBanner,
};

export const RestaurantBannerComponent = () => (
  <div style={{ padding: "3.8rem" }}>
    <RestaurantBanner data={data} />
  </div>
);
