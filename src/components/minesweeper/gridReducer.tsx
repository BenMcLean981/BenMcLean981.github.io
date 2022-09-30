import { GridSettings } from "./gridSettings";
import { MinesweeperGrid } from "./grid";
import { MinesweeperTile } from "./tile";
import React from "react";

type RevealAction = {
  type: "REVEAL";
  tile: MinesweeperTile;
};

type FlagAction = {
  type: "FLAG";
  tile: MinesweeperTile;
};

type ResetAction = {
  type: "RESET";
  settings: GridSettings;
};

type GridAction = RevealAction | FlagAction | ResetAction;

export const gridReducer: React.Reducer<MinesweeperGrid, GridAction> = (
  grid,
  action
): MinesweeperGrid => {
  switch (action.type) {
    case "REVEAL":
      return handleReveal(grid, action);
    case "FLAG": {
      return grid.toggleFlag(action.tile.position);
    }
    case "RESET": {
      return MinesweeperGrid.make(grid.size);
    }
  }
};

function handleReveal(
  grid: MinesweeperGrid,
  action: RevealAction
): MinesweeperGrid {
  const pos = action.tile.position;
  if (grid.isMine(pos) && !grid.isFlag(pos)) {
    return grid.lose();
  }
  if (grid.isFlag(pos)) {
    return grid; // don't reveal flagged tiles.
  } else {
    return grid.reveal(pos);
  }
}
