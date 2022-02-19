import React from "react";
import { Outlet } from "react-router-dom";
import { MainLayout } from "components/MainLayout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Home = () => {
  return (
    <MainLayout className="app">
      <Outlet />
      <ToastContainer style={{ top: "10rem" }} />
    </MainLayout>
  );
};
