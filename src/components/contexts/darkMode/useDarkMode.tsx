import React from "react";
import { darkModeContext } from "./darkModeContext";

export type DarkMode = {
  enabled: boolean;
  toggle: () => void;
  enable: () => void;
  disable: () => void;
};

export function useDarkMode(): DarkMode {
  const context = React.useContext(darkModeContext);
  if (context === undefined) {
    throw new Error("useDarkMode must be used within a DarkModeProvider");
  } else {
    const [state, dispatch] = context;

    return {
      enabled: state,
      toggle: () => dispatch({ type: "TOGGLE" }),
      enable: () => dispatch({ type: "ENABLE" }),
      disable: () => dispatch({ type: "DISABLE" }),
    };
  }
}
