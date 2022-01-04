import { GridSize, validateGridSize } from "./gridSize";
import { Position, generateMinePositions } from "./position";
import { Tile, copyTile, makeTile } from "./tile";

import { makeEmptyArray } from "../../../utils/makeEmptyArray";

export type GridTiles = Array<Array<Tile>>;

export interface Grid {
  tiles: GridTiles;
  size: GridSize;
}

export function makeGridTiles(size: GridSize): GridTiles {
  function makeRow(rowIdx: number): Array<Tile> {
    return makeEmptyArray(size.cols).map((_, colIdx) =>
      makeTile(rowIdx, colIdx)
    );
  }

  return makeEmptyArray(size.rows).map((_, rowIdx) => makeRow(rowIdx));
}

export function fillGrid(grid: Grid, seed?: number): Grid {
  const positions = generateMinePositions(grid.size, seed);
  return positions.reduce((grid, pos) => minePosition(grid, pos), grid);
}

export function initializeGrid(size: GridSize, seed?: number): Grid {
  if (!validateGridSize(size))
    throw new Error("Number of mines too large, exceeds number of tiles.");

  return {
    tiles: makeGridTiles(size),
    size,
  };
}

export function makeGrid(size: GridSize, seed?: number): Grid {
  const grid = initializeGrid(size, seed);
  return fillGrid(grid, seed);
}

export function minePosition(grid: Grid, position: Position): Grid {
  const tiles = grid.tiles.map((row) => row.map(copyTile));
  tiles[position.row - 1][position.col - 1].mined = true;

  return { ...grid, tiles };
}

export function getTile(grid: Grid, position: Position): Tile {
  return grid.tiles[position.row - 1][position.col - 1];
}
