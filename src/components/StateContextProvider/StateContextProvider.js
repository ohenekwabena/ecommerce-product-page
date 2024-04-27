"use client";
import React from "react";

export const StateContext = React.createContext();
function StateContextProvider({ children }) {
  return <StateContext.Provider>{children}</StateContext.Provider>;
}

export default StateContextProvider;
