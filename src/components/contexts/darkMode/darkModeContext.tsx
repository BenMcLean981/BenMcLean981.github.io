import * as React from "react";

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
