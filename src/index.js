import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";
import App from "./App";
import { makeServer } from "./server";
import { UserContextProvider } from "features/context/UserContext";
import "./styles/index.scss";

makeServer();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <UserContextProvider>
        <App />
      </UserContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
