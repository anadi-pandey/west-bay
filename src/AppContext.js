// MyContext.js

import React, { createContext, useState } from "react";

// Create a context with a default value (in this case, an empty object)
const AppContext = createContext({});

// Create a context provider component
const AppContextProvider = ({ children }) => {
  const [showHeader, setShowHeader] = useState(false);

  const updateValue = (newValue, operation) => {
    if (operation === "header") {
      setShowHeader(newValue);
      setAppState({
        isPlayedOnce: newValue,
        currentSection: "flags",
        isBackTopVisible: false,
      });
    }
    if (operation === "showBackToTop") {
      setAppState({
        isPlayedOnce: true,
        currentSection: "flags",
        isBackTopVisible: newValue,
      });
    }
  };

  const [appState, setAppState] = useState({
    isPlayedOnce: false,
    currentSection: "flags",
  });

  // Provide the context value to the child components
  return (
    <AppContext.Provider value={{ appState, updateValue }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
