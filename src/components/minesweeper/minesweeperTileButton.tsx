import React from "react";
import { TileProps } from "./tile";

export function MinesweeperTileButton(props: TileProps) {
  const tile = props.tile;

  function getText(): string {
    if (tile.flags.flagged && tile.flags.mined && props.gameOver) return "💣";
    if (tile.flags.flagged && !tile.flags.mined && props.gameOver) return "❌";
    if (tile.flags.flagged && tile.flags.hidden) return "🚩";
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

  function getHoverClass(): string {
    if (props.gameOver) return "";
    else return "hover:bg-slate-500 ";
  }

  function getTextColorClass(): string {
    if (tile.nAdjMines === 1) return "dark:text-blue-600 text-blue-700";
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
    "w-full aspect-square border border-neutral-500 rounded-sm font-mono sm:text-md md:text-md lg:text-lg xl:text-xl ";

  return (
    <button
      className={`${baseClass} ${getBackgroundClass()} ${getTextColorClass()} ${getHoverClass()}`}
      onClick={handleLeftClick}
      onContextMenu={handleRightClick}
      disabled={props.gameOver}
    >
      {getText()}
    </button>
  );
}
