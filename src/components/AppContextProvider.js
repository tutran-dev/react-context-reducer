import React, { useReducer } from "react";
import { uuid as v4 } from "uuid";

export const AppContext = React.createContext();

const reducer = (state, { type, payload }) => {
  switch (type) {
    case "ADD CUSTOMER TO RESERVATION LIST":
      return { ...state, reservations: [...state.reservations, payload] };

    case "ADD CUSTOMER TO TABLE LIST":
      return { ...state, tables: [...state.tables, payload] };

    case "REMOVE CUSTOMER FROM RESERVATION LIST":
      const { customerId } = payload;
      const reservations = state.reservations.filter(
        (customer) => customer.customerId !== customerId
      );
      return { ...state, reservations };
    default:
      return state;
  }
};
function AppContextProvider({ children }) {
  const initialState = {
    reservations: [],
    tables: [],
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AppContext.Provider value={{ dispatch, state }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;
