import {
  MinesweeperGridProvider,
  minesweeperGridContext,
} from "./gridProvider";

import { Position } from "./position";
import { useContext } from "react";

export interface MinesweeperTile {
  position: Position;
  hidden: boolean;
  mined: boolean;
  flagged: boolean;
  number?: number;
}
export function makeTile(row: number, col: number): MinesweeperTile {
  return {
    position: { row, col },
    hidden: true,
    flagged: false,
    mined: false,
  };
}

export function copyTile(tile: MinesweeperTile): MinesweeperTile {
  return {
    position: tile.position,
    hidden: tile.hidden,
    flagged: tile.flagged,
    mined: tile.mined,
  };
}

export interface TileProps {
  tile: MinesweeperTile;
}

export function MinesweeperTileButton(props: TileProps) {
  const tile = props.tile

  if (tile.hidden) {
    return <button></button>;
  } else if (tile.flagged && !tile.hidden) {
    return <button>F</button>;
  } else if (tile.mined && !tile.hidden) {
    return <button>X</button>;
  } else {
    return <button>{tile.number}</button>;
  };
}
