import React from "react";
import { darkModeContext } from "./darkModeContext";

export function useDarkMode() {
  const context = React.useContext(darkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a CountProvider");
  }
  return context;
}
