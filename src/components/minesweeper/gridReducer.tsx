import { GridSettings } from "./gridSettings";
import { MinesweeperGrid } from "./grid";
import { MinesweeperTile } from "./tile";
import React from "react";

type GridAction =
  | { type: "REVEAL"; tile: MinesweeperTile }
  | { type: "FLAG"; tile: MinesweeperTile }
  | { type: "RESET"; settings: GridSettings };

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
    case "REVEAL":
      if (grid.isMine(action.tile.position)) return grid.lose();
      else return grid.reveal(action.tile.position);
    case "FLAG":
      return grid.toggleFlag(action.tile.position);
    case "RESET":
      return MinesweeperGrid.make(grid.size);
  }
};
