import React from "react";
import { DashboardPage } from "./Dashboard";
import { ReservationsPage } from "./Reservations";
import { MeetingRooms } from "./MeetingRooms";
import { Books } from "./Books";
import { Devices } from "./Devices";
import { EatOutPage } from "./EatOut";
import { RestaurantPage } from "./RestaurantPage";
import { NotFound } from "./NotFound";
import { Home } from "./Home/Home";
import { LogIn } from "pages/LogIn";
import { Register } from "pages/Register";

export const getRoutes = (isLoggedIn) =>
  isLoggedIn
    ? [
        {
          path: "/",
          element: <Home />,
          name: "dashboard",
          children: [
            { index: true, element: <DashboardPage />, name: "dashboard" },
            {
              path: "/reservations",
              name: "reservations",
              children: [
                { path: "", element: <ReservationsPage /> },
                {
                  path: "meeting-rooms",
                  name: "meeting rooms",
                  element: <MeetingRooms />,
                },
                {
                  path: "books",
                  name: "books",
                  element: <Books />,
                },
                {
                  path: "devices",
                  name: "devices",
                  element: <Devices />,
                },
              ],
            },

            {
              path: "/eat-out",
              name: "eat-out",
              children: [
                { path: "", element: <EatOutPage /> },
                {
                  path: ":restaurantId",
                  element: <RestaurantPage />,
                },
              ],
            },
          ],
        },
        { path: "/*", element: <NotFound /> },
      ]
    : [
        { path: "/login", element: <LogIn /> },
        { path: "/register", element: <Register /> },
      ];
