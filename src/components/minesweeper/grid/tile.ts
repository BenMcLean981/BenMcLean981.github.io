import { Position } from "./position";

export interface Tile {
  position: Position;
  hidden: boolean;
  mined: boolean;
  flagged: boolean;
}
export function makeTile(row: number, col: number): Tile {
  return {
    position: { row, col },
    hidden: true,
    flagged: false,
    mined: false,
  };
}

export function copyTile(tile: Tile): Tile {
  return {
    position: tile.position,
    hidden: tile.hidden,
    flagged: tile.flagged,
    mined: tile.mined,
  };
}
