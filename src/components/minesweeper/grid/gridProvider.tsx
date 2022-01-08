import { MinesweeperGrid, initializeGrid, revealTile, toggleFlagTile, revealGrid } from "./grid";

import { GridSize } from "./gridSize";
import React from "react";
import { Position } from "./position";

type GridAction =
  | { type: "revealTile"; pos: Position }
  | { type: "toggleFlagTile"; pos: Position }
  | { type: "revealGrid" };

type GridDispatch = (action: GridAction) => void;

type GridContext = {
  state: MinesweeperGrid;
  dispatch: GridDispatch;
};

export const minesweeperGridContext = React.createContext<
  GridContext | undefined
>(undefined);

export const gridReducer: React.Reducer<MinesweeperGrid, GridAction> = (
  grid,
  action
) => {
  switch (action.type) {
    case "revealTile": {
      revealTile(grid, action.pos);
      return grid;
    }
    case "toggleFlagTile": {
      toggleFlagTile(grid, action.pos);
      return grid;
    }
    case "revealGrid": {
      revealGrid(grid);
      return grid;
    }
  }
};

export interface GridProviderProps {
  size: GridSize;
}

export function MinesweeperGridProvider(props: GridProviderProps) {
  const [state, dispatch] = React.useReducer(
    gridReducer,
    initializeGrid(props.size, 0)
  );

  const value = { state, dispatch };

  return <minesweeperGridContext.Provider value={value} />;
}
