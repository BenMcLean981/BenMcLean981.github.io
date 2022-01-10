import { GameOverMessage } from "./gameOverMessage";
import { MinesweeperGrid } from "./grid";
import { Timer } from "./useTimer";

interface Props {
  grid: MinesweeperGrid;
  onReset: () => void;
  timer: Timer;
}

export function GameBanner(props: Props) {
  const { timer, grid, onReset } = props;

  const time = timer.isEnabled || timer.seconds !== 0 ? timer.format() : "";

  return (
    <div className="flex justify-between mx-auto items-center space-x-4 py-4">
      <button
        className="bg-blue-500 hover:bg-blue-700 py-2 px-12 text-white font-bold rounded"
        onClick={onReset}
      >
        Reset
      </button>
      <GameOverMessage gameOver={grid.isGameOver()} hasLost={grid.hasLost} />
      <div className="text-3xl font-medium leading-tight">{time}</div>
    </div>
  );
}
