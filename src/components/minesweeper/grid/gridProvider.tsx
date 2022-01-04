import { MinesweeperGrid, initializeGrid } from "./grid";

import { GridSize } from "./gridSize";
import React from "react";

type GridAction =
  | { type: "revealTile"; row: number; col: number }
  | { type: "flagTile"; row: number; col: number }
  | { type: "revealBoard" };

type GridDispatch = (action: GridAction) => void;

type GridContext = {
  state: MinesweeperGrid;
  dispatch: GridDispatch;
};

export const minesweeperGridContext = React.createContext<
  GridContext | undefined
>(undefined);

const gridReducer: React.Reducer<MinesweeperGrid, GridAction> = (
  grid,
  action
) => {
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
  size: GridSize;
}

export function MinesweeperGridProvider(props: Props) {
  const [state, dispatch] = React.useReducer(
    gridReducer,
    initializeGrid(props.size, 0)
  );

  const value = { state, dispatch };

  return <minesweeperGridContext.Provider value={value} />;
}
