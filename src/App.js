import React, { useContext, useEffect } from "react";
import { useNavigate, useRoutes } from "react-router-dom";
import { APIContextProvider } from "features/context/APIContext";
import { UserContext } from "features/context";
import { getRoutes } from "pages/routes";

function App() {
  const { userData } = useContext(UserContext);
  const navigate = useNavigate();
  const appRoutesElement = useRoutes(getRoutes(userData.isLoggedIn));

  useEffect(() => {
    if (!userData.isLoggedIn) {
      navigate("/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData.isLoggedIn]);

  return <APIContextProvider>{appRoutesElement}</APIContextProvider>;
}

export default App;
