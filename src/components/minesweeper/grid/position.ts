import { GridSize } from "./gridSize";

const seedrandom = require("seedrandom");

export type Position = { row: number; col: number };

export function isPositionEqual(a: Position, b: Position): boolean {
  return a.row === b.row && a.col === b.col;
}

export function generateRandomPosition(
  size: GridSize,
  usedPositions: Position[],
  prng: any
): Position {
  const randPos: Position = {
    row: Math.ceil(prng() * size.rows),
    col: Math.ceil(prng() * size.cols),
  };
  const valid = usedPositions.every((p) => !isPositionEqual(p, randPos));
  if (valid) return randPos;
  //if unique, return
  else return generateRandomPosition(size, usedPositions, prng); //try again recursively until we find a valid solution
}

export function generateMinePositions(
  size: GridSize,
  seed?: number
): Position[] {
  const prng = new seedrandom(seed);
  const positions: Position[] = [];

  for (let i = 0; i < size.mines; i++) {
    positions.push(generateRandomPosition(size, positions, prng));
  }

  return positions;
}
