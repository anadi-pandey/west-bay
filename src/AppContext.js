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
        isDropArrowVisible: true,
      });
    }
    if (operation === "showBackToTop") {
      setAppState({
        isPlayedOnce: true,
        currentSection: "flags",
        isBackTopVisible: newValue,
        isDropArrowVisible: true,
      });
    }
    if (operation === "showDownArrow") {
      setAppState({
        isPlayedOnce: true,
        currentSection: "flags",
        isBackTopVisible: true,
        isDropArrowVisible: newValue,
      });
    }
  };

  const [appState, setAppState] = useState({
    isPlayedOnce: false,
    currentSection: "flags",
    isDropArrowVisible: true,
  });

  // Provide the context value to the child components
  return (
    <AppContext.Provider value={{ appState, updateValue }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppContextProvider };
