import React, { createContext, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import fetchData from "features/data/fetchData";
import { reducer } from "utils";

const initState = { data: {}, isLoading: false, hasError: false };
const APIContext = createContext();

export const APIContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  function fetchDataToState() {
    const args = Array.from(arguments);

    const filteredArgs = args.filter(
      (arg) => !Object.keys(state.data).includes(arg)
    );

    dispatch({ type: "loading" });

    fetchData(filteredArgs).then((res) => {
      setTimeout(
        () =>
          dispatch({
            type: "loaded",
            payload: { data: res.data, hasError: res.hasError },
          }),
        100
      );
    });
  }

  return (
    <APIContext.Provider value={[state, fetchDataToState, dispatch]}>
      {children}
    </APIContext.Provider>
  );
};

export const useAPI = () => {
  const context = useContext(APIContext);
  if (context === undefined) {
    throw new Error("Context must be used within a Provider");
  }
  return context;
};

APIContextProvider.propTypes = {
  children: PropTypes.node,
};
