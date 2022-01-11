import * as React from "react";

import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export type DarkModeState = boolean;

export type DarkModeAction =
  | { type: "TOGGLE" }
  | { type: "ENABLE" }
  | { type: "DISABLE" };

export type DarkModeDispatch = (action: DarkModeAction) => void;

export type DarkModeContext = [DarkModeState, DarkModeDispatch];

export const darkModeContext = React.createContext<DarkModeContext | undefined>(
  undefined
);

export const darkModeReducer: React.Reducer<DarkModeState, DarkModeAction> = (
  state,
  action
) => {
  switch (action.type) {
    case "TOGGLE":
      return !state;
    case "ENABLE":
      return true;
    case "DISABLE":
      return false;
  }
};

export function DarkModeProvider(props: React.PropsWithChildren<{}>) {
  const systemDark = useMediaQuery("(preferes-color-scheme: dark)");
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
