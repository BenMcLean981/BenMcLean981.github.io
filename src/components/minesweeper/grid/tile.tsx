import {
  MinesweeperGridProvider,
  minesweeperGridContext,
} from "./gridProvider";

import { Position } from "./position";
import { useContext } from "react";

interface TileFlags {
  hidden: boolean;
  mined: boolean;
  flagged: boolean;
}

export class MinesweeperTile {
  position: Position;
  flags: TileFlags;

  nAdjMines?: number;

  constructor(position: Position, flags: TileFlags, number?: number) {
    this.position = position;
    this.flags = flags;
    this.nAdjMines = number;
  }

  static makeTile(p: Position): MinesweeperTile {
    const DEFAULT_FLAGS = {
      hidden: true,
      mined: false,
      flagged: false,
    };
    return new MinesweeperTile(p, DEFAULT_FLAGS);
  }

  copy(): MinesweeperTile {
    return new MinesweeperTile(this.position.copy(), { ...this.flags }, this.nAdjMines);
  }

  reveal(): MinesweeperTile {
    const tile = this.copy();
    tile.flags.hidden = false;
    return tile;
  }

  mine(): MinesweeperTile {
    const tile = this.copy();
    tile.flags.mined = true;
    return tile;
  }

  toggleFlag(): MinesweeperTile {
    const tile = this.copy();
    tile.flags.flagged = !tile.flags.flagged;
    return tile;
  }

  applyNumber(n: number): MinesweeperTile {
    const tile = this.copy();
    tile.nAdjMines = n;
    return tile;
  }
}

export interface TileProps {
  tile: MinesweeperTile;
}

export function MinesweeperTileButton(props: TileProps) {
  const tile = props.tile

  if (tile.flags.hidden) {
    return <button></button>;
  } else if (tile.flags.flagged && !tile.flags.hidden) {
    return <button>F</button>;
  } else if (tile.flags.mined && !tile.flags.hidden) {
    return <button>X</button>;
  } else {
    return <button>{tile.nAdjMines}</button>;
  };
}
