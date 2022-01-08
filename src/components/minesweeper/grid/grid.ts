import { GridSize, validateGridSize } from "./gridSize";
import { MinesweeperTile, copyTile, makeTile } from "./tile";
import {
  Position,
  generateMinePositions,
  getNeighboringPositions,
} from "./position";

import { makeEmptyArray } from "../../../utils/makeEmptyArray";
import { notUndefined } from "../../../utils/notUndefined";

export interface MinesweeperGrid {
  rows: MinesweeperTile[][];
  size: GridSize;
}

export function makeGridTiles(size: GridSize): MinesweeperTile[][] {
  function makeRow(rowIdx: number): Array<MinesweeperTile> {
    return makeEmptyArray(size.cols).map(
      (_, colIdx) => makeTile(rowIdx + 1, colIdx + 1) //exclude zero which might be confusing
    );
  }

  return makeEmptyArray(size.rows).map((_, rowIdx) => makeRow(rowIdx));
}

export function mineGrid(
  grid: MinesweeperGrid,
  seed?: number
): MinesweeperGrid {
  const positions = generateMinePositions(grid.size, seed);
  return positions.reduce((grid, pos) => minePosition(grid, pos), grid);
}

export function numberGrid(grid: MinesweeperGrid): MinesweeperGrid {
  const numberedTiles = grid.rows.map((row) =>
    row.map((tile) => {
      if (tile.mined)
        return copyTile(tile);
      else
        return {
          ...tile,
          number: countNeighboringMines(grid, tile.position),
        }
    })
  );

  return {
    ...grid,
    rows: numberedTiles,
  }
}

export function initializeGrid(size: GridSize, seed?: number): MinesweeperGrid {
  if (!validateGridSize(size))
    throw new Error("Number of mines too large, exceeds number of tiles.");

  return {
    rows: makeGridTiles(size),
    size,
  };
}

export function makeGrid(size: GridSize, seed?: number): MinesweeperGrid {
  const grid = initializeGrid(size, seed);
  return mineGrid(grid, seed);
}

export function minePosition(
  grid: MinesweeperGrid,
  position: Position
): MinesweeperGrid {
  const tiles = grid.rows.map((row) => row.map(copyTile));
  tiles[position.row - 1][position.col - 1].mined = true;

  return { ...grid, rows: tiles };
}

export function getTile(
  grid: MinesweeperGrid,
  p: Position
): MinesweeperTile | undefined {
  if (
    p.row > grid.size.rows ||
    p.col > grid.size.cols ||
    p.row < 1 ||
    p.col < 1
  )
    return undefined;
  else return grid.rows[p.row - 1][p.col - 1];
}

export function getNeighbors(
  grid: MinesweeperGrid,
  pos: Position
): MinesweeperTile[] {
  const neighbors = getNeighboringPositions(pos);
  return neighbors.map((p) => getTile(grid, p)).filter(notUndefined);
}

export function countNeighboringMines(grid: MinesweeperGrid, pos: Position): number {
  return getNeighbors(grid, pos).filter((t) => t.mined).length;
}

export function revealTile(grid: MinesweeperGrid, pos: Position): void {
  const tile = getTile(grid, pos) as MinesweeperTile;
  tile.hidden = false;
}

export function toggleFlagTile(grid: MinesweeperGrid, pos: Position): void {
  const tile = getTile(grid, pos) as MinesweeperTile;
  tile.flagged = !tile.flagged;
}

export function revealGrid(grid: MinesweeperGrid): void {
  grid.rows.forEach((row) =>
    row.forEach((tile) => tile.hidden = false)
  );
}