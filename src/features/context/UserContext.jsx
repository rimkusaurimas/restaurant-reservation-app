import React, { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";

export const UserContext = createContext({
  userData: {
    id: "",
    isLoggedIn: false,
    userName: "",
    email: "",
    userImage: "",
    location: "",
  },
  logInUser: () => {},
  logOutUser: () => {},
});

export const UserContextProvider = (props) => {
  const navigate = useNavigate();
  const defaultUserData = {
    id: "",
    isLoggedIn: false, // Don't forget to reset value to false!
    userName: "",
    email: "",
    userImage: "",
    location: "",
  };

  const [userData, setUserData] = useState(defaultUserData);

  const logInUser = (data) => {
    const newUserData = data[0];
    setUserData((prevData) => {
      return { ...prevData, ...newUserData, isLoggedIn: true };
    });
  };

  const logOutUser = () => {
    setUserData(defaultUserData);
    navigate("/login");
  };

  return (
    <UserContext.Provider value={{ userData, logInUser, logOutUser }}>
      {props.children}
    </UserContext.Provider>
  );
};

UserContextProvider.propTypes = {
  children: PropTypes.node,
};
