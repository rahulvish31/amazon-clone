import React, { createContext, useContext, useReducer } from "react";

//Prepares the datalayer
export const StateContext = createContext();

//Wrap our app and provide the Data Layer
export const StateProvider = ({ reducer, initialState, childre }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {}
  </StateContext.Provider>
);

//Pull information from Data Layer
export const useStateValue = () => useContext(StateContext);
