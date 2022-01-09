import { Position } from "./position";
import React, { useContext } from "react";

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
  handleClick?: (tile: MinesweeperTile, e: React.MouseEvent) => void;
}

export function MinesweeperTileButton(props: TileProps) {
  const tile = props.tile

  function getText(): string {
    if (tile.flags.hidden)
      return ""
    else if (tile.flags.flagged && tile.flags.hidden)
      return "🚩"
    else if (tile.flags.mined && !tile.flags.hidden)
      return "💣"
    else if (tile.nAdjMines === undefined)
      return ""
    else
      return tile.nAdjMines.toString()
  }

  return <button onClick={(e) => props.handleClick(tile, e)}>{getText()}</button>
}
