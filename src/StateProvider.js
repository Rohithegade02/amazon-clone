import React, { createContext, useContext, useReducer } from "react";
//Prepares the datalayer
export const StateContext = createContext();
//it will wrap your app n provide the data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);
//pull the info from the data layer
export const useStateValue = () => useContext(StateContext);
