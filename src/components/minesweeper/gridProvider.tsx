import { Grid, makeGrid } from "./grid";

import React from "react";

type GridAction =
  | { type: "revealTile"; row: number; col: number }
  | { type: "flagTile"; row: number; col: number }
  | { type: "revealBoard" };

type GridDispatch = (action: GridAction) => void;

const gridContext = React.createContext<{
  state: Grid;
  dispatch: GridDispatch;
}>(undefined);

const gridReducer: React.Reducer<Grid, GridAction> = (grid, action) => {
  switch (action.type) {
    case "revealTile": {
      return grid;
    }
    case "flagTile": {
      return grid;
    }
    case "revealBoard": {
      return grid;
    }
  }
};

interface Props {
  rows: number;
  cols: number;
}

export function GridProvider(props: Props) {
  const [state, dispatch] = React.useReducer(
    gridReducer,
    makeGrid(props.rows, props.cols, 0)
  );

  const value = { state, dispatch };

  return <gridContext.Provider value={value} />;
}
