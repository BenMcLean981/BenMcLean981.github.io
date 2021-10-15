import { makeEmptyArray } from "../../utils/makeEmptyArray";
const seedrandom = require("seedrandom");

export interface Tile {
  position: Position;
  hidden: boolean;
  mined: boolean;
  flagged: boolean;
}

export type GridTiles = Array<Array<Tile>>;

export type GridSize = {
  rows: number;
  cols: number;
  mines: number;
};

export interface Grid {
  tiles: GridTiles;
  size: GridSize;
}
export function validateGridSettings(size: GridSize): void {
  const numCells = size.rows * size.cols;

  if (size.mines >= numCells)
    throw new Error("Number of mines too large, all tiles will be mined.");
}

export function makeTile(row: number, col: number): Tile {
  return {
    position: { row, col },
    hidden: true,
    flagged: false,
    mined: false,
  };
}

export function makeGridTiles(size: GridSize): GridTiles {
  function makeRow(rowIdx: number): Array<Tile> {
    return makeEmptyArray(size.cols).map((_, colIdx) =>
      makeTile(rowIdx, colIdx)
    );
  }

  return makeEmptyArray(size.rows).map((_, rowIdx) => makeRow(rowIdx));
}

export type Position = { row: number; col: number };

export function generateRandomPair(
  size: GridSize,
  pairs: Position[],
  prng: any
): Position {
  const pair: Position = { row: prng() * size.rows, col: prng * size.cols };
  const valid = pairs.every((p) => p[0] !== pair[0] && p[1] !== pair[1]);
  if (valid) return pair;
  //if unique, return
  else return generateRandomPair(size, pairs, prng); //try again recursively
}

export function generateMinePositions(
  size: GridSize,
  seed: number
): Position[] {
  const prng = new seedrandom(seed);
  const pairs = [];

  for (let i = 0; i < size.mines; i++) {
    pairs.push(generateRandomPair(size, pairs, prng));
  }

  return pairs;
}

export function inPairs(pairs: Position[], tile: Tile): boolean {
  return pairs.some(
    (pair) => pair.row === tile.position.row && pair.col === tile.position.col
  );
}

export function fillGrid(grid: Grid, seed?: number): Grid {
  const pairs = generateMinePositions(grid.size, seed);

  const tiles = grid.tiles.map((row) =>
    row.map((tile) => {
      if (inPairs(pairs, tile)) return { ...tile, mined: true };
      else return { ...tile };
    })
  );

  return { ...grid, tiles };
}

export function makeGrid(size: GridSize, mines: number): Grid {
  validateGridSettings(size);

  const emptyGrid: Grid = {
    tiles: makeGridTiles(size),
    size,
  };

  return fillGrid(emptyGrid, mines);
}
