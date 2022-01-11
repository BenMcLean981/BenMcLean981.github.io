import * as React from "react";

import { useLocalStorage } from "../../../hooks/useLocalStorage";
import { useMediaQuery } from "../../../hooks/useMediaQuery";

export type DarkModeState = boolean;

export type DarkModeAction =
  | { type: "toggle" }
  | { type: "enable" }
  | { type: "disable" };

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
    case "toggle":
      return !state;
    case "enable":
      return true;
    case "disable":
      return false;
    default:
      return state;
  }
};

export function DarkModeProvider(props: React.PropsWithChildren<{}>) {
  const systemDark = useMediaQuery("query") ? "true" : "false";
  const [storedDarkMode] = useLocalStorage("storedDarkMode", systemDark);

  const [darkMode, dispatchDarkMode] = React.useReducer(
    darkModeReducer,
    storedDarkMode === "true"
  );

  React.useEffect(() => {
    if (darkMode) document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [darkMode]);

  return (
    <darkModeContext.Provider value={[darkMode, dispatchDarkMode]}>
      {props.children}
    </darkModeContext.Provider>
  );
}
