import React, { createContext, useContext, useReducer } from "react";

//preparing data layer
export const StateContex = createContext();

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContex.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContex.Provider>
);

//hook
export const useStateValue = () => useContext(StateContex);
