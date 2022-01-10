import { GameOverMessage } from "./gameOverMessage";
import { MinesweeperGrid } from "./grid";
import React from "react";

interface Props {
  grid: MinesweeperGrid;
  onReset: () => void;
}

export function GameBanner(props: Props) {
  return (
    <div className="flex justify-center mx-auto items-center space-x-4 p-4">
      <GameOverMessage
        gameOver={props.grid.isGameOver()}
        hasLost={props.grid.hasLost}
      />
      <button
        className="bg-blue-500 hover:bg-blue-700 py-2 px-6 text-white font-bold rounded"
        onClick={props.onReset}
      >
        Reset
      </button>
    </div>
  );
}
