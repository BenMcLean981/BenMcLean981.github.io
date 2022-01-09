import { Position } from "./position";
import React from "react";

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
    return new MinesweeperTile(
      this.position.copy(),
      { ...this.flags },
      this.nAdjMines
    );
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
    if (tile.flags.mined === false) tile.nAdjMines = n;
    return tile;
  }
}

export interface TileProps {
  tile: MinesweeperTile;
  gameOver?: boolean;
  handleFlag?: (tile: MinesweeperTile) => void;
  handleReveal?: (tile: MinesweeperTile) => void;
}

export function MinesweeperTileButton(props: TileProps) {
  const tile = props.tile;

  function getText(): string {
    if (tile.flags.flagged && tile.flags.mined && props.gameOver) return "❌";
    if (tile.flags.flagged) return "🚩";
    else if (tile.flags.mined && !tile.flags.hidden) return "💣";
    else if (tile.nAdjMines === undefined) return "";
    else if (!tile.flags.hidden && tile.nAdjMines === 0) return "";
    else if (!tile.flags.hidden) return tile.nAdjMines.toString();
    else return "";
  }

  function getBackgroundClass(): string {
    if (tile.flags.hidden) return "bg-slate-700";
    else if (tile.flags.mined && !tile.flags.flagged) return "bg-red-600";
    else return "bg-slate-500";
  }

  function getTextColorClass(): string {
    if (tile.nAdjMines === 1) return "text-blue-600";
    else if (tile.nAdjMines === 2) return "text-green-500";
    else if (tile.nAdjMines === 3) return "text-red-700";
    else if (tile.nAdjMines === 4) return "text-blue-900";
    else if (tile.nAdjMines === 5) return "text-red-900";
    else if (tile.nAdjMines === 6) return "text-cyan-700";
    else if (tile.nAdjMines === 7) return "text-black";
    else if (tile.nAdjMines === 8) return "text-gray-700";
    else return "";
  }

  function handleRightClick(e: React.MouseEvent) {
    e.preventDefault();
    if (props.handleFlag !== undefined) props.handleFlag(tile);
  }

  function handleLeftClick(e: React.MouseEvent) {
    e.preventDefault();
    if (props.handleReveal !== undefined) props.handleReveal(tile);
  }

  const baseClass =
    "w-full aspect-square border border-neutral-500 rounded-sm hover:bg-slate-500 font-mono text-2xl";

  return (
    <button
      className={`${baseClass} ${getBackgroundClass()} ${getTextColorClass()}`}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      disabled={props.gameOver}
    >
      {getText()}
    </button>
  );
}
