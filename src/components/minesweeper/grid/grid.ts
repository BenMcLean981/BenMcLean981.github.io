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
  tiles: MinesweeperTile[][];
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

export function fillGrid(
  grid: MinesweeperGrid,
  seed?: number
): MinesweeperGrid {
  const positions = generateMinePositions(grid.size, seed);
  return positions.reduce((grid, pos) => minePosition(grid, pos), grid);
}

export function initializeGrid(size: GridSize, seed?: number): MinesweeperGrid {
  if (!validateGridSize(size))
    throw new Error("Number of mines too large, exceeds number of tiles.");

  return {
    tiles: makeGridTiles(size),
    size,
  };
}

export function makeGrid(size: GridSize, seed?: number): MinesweeperGrid {
  const grid = initializeGrid(size, seed);
  return fillGrid(grid, seed);
}

export function minePosition(
  grid: MinesweeperGrid,
  position: Position
): MinesweeperGrid {
  const tiles = grid.tiles.map((row) => row.map(copyTile));
  tiles[position.row - 1][position.col - 1].mined = true;

  return { ...grid, tiles };
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
  else return grid.tiles[p.row - 1][p.col - 1];
}

export function getNeighbors(
  grid: MinesweeperGrid,
  tile: MinesweeperTile
): MinesweeperTile[] {
  const neighbors = getNeighboringPositions(tile.position);
  return neighbors.map((p) => getTile(grid, p)).filter(notUndefined);
}
