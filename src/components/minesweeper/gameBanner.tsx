import { GameOverMessage } from "./gameOverMessage";
import { MinesweeperGrid } from "./grid";
import React from "react";

interface Props {
  grid: MinesweeperGrid;
  onReset: () => void;
}

export function GameBanner(props: Props) {
  return (
    <div>
      <GameOverMessage
        gameOver={props.grid.isGameOver()}
        hasLost={props.grid.hasLost}
      />
    </div>
  );
}
