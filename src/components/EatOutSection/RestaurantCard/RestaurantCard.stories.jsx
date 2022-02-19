import React from "react";
import { RestaurantCard } from "./RestaurantCard";
import { withKnobs } from "@storybook/addon-knobs";

export const RestaurantCardSection = () => {
  const mockedData = [
    {
      name: "Grill London (Kaunas, PLC Mega)",
      id: "120wsdlpx4",
      slogan: "Best burgers in the town",
      createdDate: "2019-06-05",
      description:
        "„Grill London” is a chain of grill restaurants that visitors love because of its exceptional and responsible take on food quality. All of its steaks are grilled in unique ceramic grills using ecological fuels.",
      openingHours: [
        {
          days: "Monday - Friday",
          hours: "10:30 - 22:15",
        },
        {
          days: "Saturday - Sunday",
          hours: "11:00 - 23:00",
        },
      ],
      website: "http://grilllondon.lt",
      location: {
        address: "Islandijos pl. 32, Kaunas",
        coordinates: {
          lat: 54.94013552838086,
          lng: 23.891938359698315,
        },
      },
      phone: "+370 627 93122",
      image:
        "https://images.unsplash.com/photo-1498579485796-98be3abc076e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80",
      checkIns: 8,
      reviews: [
        {
          userName: "Luke Skywalker",
          id: "730tybsl12",
          comment: "Tasty burgers, but had to wait a long line.",
          rating: 4,
        },
        {
          userName: "Uncle Roger",
          id: "10f836s0pw",
          comment: "Didn't have fried rice, a bit disappointed.",
          rating: 3.5,
        },
        {
          userName: "Sara Lars",
          id: "183gstwpl6",
          comment:
            "Food didn’t meet my expectations, but it was fine. But the customer experience was flawless!",
          rating: 5,
        },
        {
          userName: "Wade Owen Watts",
          id: "183620uer",
          comment: "Good burgers, good price",
          rating: 4,
        },
      ],
      categories: ["Burger", "Salads", "Grill"],
    },
  ];

  return (
    <div>
      {mockedData.map((item, index) => (
        <RestaurantCard key={`${index}`} data={item} />
      ))}
    </div>
  );
};

export default {
  title: "Components / RestaurantCard",
  decorators: [withKnobs],
  component: RestaurantCard,
};

export const Default = () => {
  return (
    <div>
      <RestaurantCardSection />
    </div>
  );
};
