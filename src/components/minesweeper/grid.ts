import { makeEmptyArray } from "../../utils/makeEmptyArray";

export interface Tile {
  row: number;
  col: number;
  hidden: boolean;
  mined: boolean;
  flagged: boolean;
}

export type Grid = Array<Array<Tile>>;

export function validateGridSettings(
  rows: number,
  cols: number,
  mines: number
): void {
  const numCells = rows * cols;

  if (mines >= numCells)
    throw new Error("Number of mines too large, all tiles will be mined.");
}

export function makeTile(row: number, col: number): Tile {
  return {
    row,
    col,
    hidden: true,
    flagged: false,
    mined: false,
  };
}

export function makeEmptyGrid(rows, cols): Grid {
  function makeRow(rowIdx: number): Array<Tile> {
    return makeEmptyArray(cols).map((_, colIdx) => makeTile(rowIdx, colIdx));
  }

  return makeEmptyArray(rows).map((_, rowIdx) => makeRow(rowIdx));
}

export function fillGrid(grid: Grid, mines: number, seed?: number): Grid {
  return grid;
}

export function makeGrid(rows: number, cols: number, mines: number): Grid {
  validateGridSettings(rows, cols, mines);

  const emptyGrid = makeEmptyGrid(rows, cols);
  return fillGrid(emptyGrid, mines);
}
