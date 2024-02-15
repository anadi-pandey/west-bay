// MyContext.js

import React, { createContext, useState } from "react";

// Create a context with a default value (in this case, an empty object)
const AppContext = createContext({});

// Create a context provider component
const AppContextProvider = ({ children }) => {
  const [showHeader, setShowHeader] = useState(false);

  const updateValue = (newValue) => {
    setShowHeader(newValue);
  };

  // Provide the context value to the child components
  return (
    <AppContext.Provider value={{ showHeader, updateValue }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
