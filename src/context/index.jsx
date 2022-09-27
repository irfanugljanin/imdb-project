import React from "react";

export const AppContext = React.createContext();

const ContextProvider = (props) => {
  const value = {};

  return (
    <AppContext.Provider value={value}>{props.children}</AppContext.Provider>
  );
};

export default ContextProvider;
