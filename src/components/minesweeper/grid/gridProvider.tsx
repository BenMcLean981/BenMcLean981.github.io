import { MinesweeperGrid } from "./grid";

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
    case "revealTile":
      return grid.reveal(action.pos)
    case "toggleFlagTile":
      return grid.toggleFlag(action.pos);
    case "revealGrid":
      return grid.revealAll();
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
