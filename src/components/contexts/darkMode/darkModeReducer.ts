import * as React from "react";

import { DarkModeAction, DarkModeState } from "./darkModeContext";

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
