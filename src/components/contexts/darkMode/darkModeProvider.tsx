import React from "react";
import { darkModeContext } from "./darkModeContext";
import { darkModeReducer } from "./darkModeReducer";
import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export function DarkModeProvider(props: React.PropsWithChildren<{}>) {
  const systemDark = useMediaQuery("(prefers-color-scheme: dark)");
  const [storedDarkMode, setStoredDarkMode] = useLocalStorage(
    "storedDarkMode",
    systemDark ? "true" : "false"
  );

  const [darkMode, dispatchDarkMode] = React.useReducer(
    darkModeReducer,
    storedDarkMode === "true"
  );

  React.useEffect(() => {
    setStoredDarkMode(darkMode ? "true" : "false");

    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode, setStoredDarkMode]);

  return (
    <darkModeContext.Provider value={[darkMode, dispatchDarkMode]}>
      {props.children}
    </darkModeContext.Provider>
  );
}
