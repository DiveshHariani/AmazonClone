// setup data layer allows components can transfer data among them

import React, { createContext, useContext, useReducer } from "react"

// This is DATA LAYER
export const StateContext = createContext();

// BUILD A PROVIDER
export const StateProvider = ({ reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// this is how we use inside component
export const useStateValue = () => useContext(StateContext);