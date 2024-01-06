import React, { createContext, useState, useContext } from "react";

export const AppContext = createContext({
  fullpageApi: "asasss",
});

export const AppContextProvider = ({ children }) => {
  const [fullpageApi, setFullpageApi] = useState(null);

  return (
    <AppContext.Provider value={{ fullpageApi, setFullpageApi }}>
      {children}
    </AppContext.Provider>
  );
};
