import React, { useContext } from "react";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  return <AppContext.Provider value={"Moosa"}>{children}</AppContext.Provider>;
};
export { AppProvider, AppContext };
