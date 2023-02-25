import { GridSettings } from "./gridSettings";
import { MinesweeperGrid } from "./grid";
import { MinesweeperTile } from "./tile";
import React from "react";
import { Position } from "./position";

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
      return handleReveal(grid, action.tile.position);
    case "FLAG": {
      return grid.toggleFlag(action.tile.position);
    }
    case "RESET": {
      return MinesweeperGrid.make(grid.size);
    }
  }
};

function handleReveal(grid: MinesweeperGrid, pos: Position): MinesweeperGrid {
  if (!grid.hasStarted() && shouldLose(grid, pos)) {
    // run recursively until a grid that will not lose
    // on first click has started.
    return generateAndRevealNewGrid(grid, pos);
  }

  return handleRevealForStartedGrid(grid, pos);
}

function shouldLose(grid: MinesweeperGrid, pos: Position) {
  return grid.isMine(pos) && !grid.isFlag(pos);
}

function generateAndRevealNewGrid(grid: MinesweeperGrid, pos: Position) {
  const newGrid = MinesweeperGrid.make(grid.size);

  return handleReveal(newGrid, pos);
}

function handleRevealForStartedGrid(
  grid: MinesweeperGrid,
  pos: Position
): MinesweeperGrid {
  if (shouldLose(grid, pos)) {
    return grid.lose();
  } else if (grid.isFlag(pos)) {
    return grid; // don't reveal flagged tiles.
  } else {
    return grid.reveal(pos);
  }
}
