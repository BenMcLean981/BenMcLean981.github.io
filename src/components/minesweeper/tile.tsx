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
  handleFlag?: (tile: MinesweeperTile) => void;
  handleReveal?: (tile: MinesweeperTile) => void;
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

  function getClass(): string {
    if (tile.flags.hidden)
      return "bg-slate-700";
    else if (tile.flags.mined)
      return "bg-red-600";
    else
      return "bg-slate-500"
  }

  function onClick(e: React.MouseEvent) {
    e.stopPropagation();
    e.preventDefault();

    if (e.button === 0 && props.handleReveal)
      props.handleReveal(tile);
    else if (e.button === 2 && props.handleFlag)
      props.handleFlag(tile)
  }

  return <button className={`w-full aspect-square border border-neutral-500 rounded-sm hover:bg-slate-500 ${getClass()}`} onClick={onClick}>{getText()}</ button>
}
