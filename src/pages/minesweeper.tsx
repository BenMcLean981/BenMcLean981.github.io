import React, { useEffect, useReducer } from "react";

import { Divider } from "../components/utils/divider";
import { GameBanner } from "../components/minesweeper/gameBanner";
import { GridSettings } from "../components/minesweeper/gridSettings";
import { H1 } from "../components/utils/headings";
import { Layout } from "../components/layout";
import { MinesweeperGrid } from "../components/minesweeper/grid";
import { MinesweeperTile } from "../components/minesweeper/tile";
import { MinesweeperTileButton } from "../components/minesweeper/minesweeperTileButton";
import { P } from "../components/utils/paragraph";
import { gridReducer } from "../components/minesweeper/gridReducer";
import { useTimer } from "../components/minesweeper/useTimer";

const INTERMEDIATE_SETTINGS: GridSettings = {
  rows: 16,
  cols: 16,
  mines: 40,
};

//to simplify screen size, only supporting intermediate settings.

export function Minesweeper() {
  const [grid, dispatch] = useReducer(
    gridReducer,
    MinesweeperGrid.make(INTERMEDIATE_SETTINGS)
  );

  const timer = useTimer();

  //need some way to fit the grid into the window

  function handleFlag(t: MinesweeperTile): void {
    dispatch({ type: "FLAG", tile: t });
  }

  function handleReveal(t: MinesweeperTile): void {
    dispatch({ type: "REVEAL", tile: t });
  }

  const gridStyle: React.CSSProperties = {
    gridTemplateColumns: `repeat(${grid.size.cols}, minmax(0, 1fr))`,
  };

  const gridComponent = (
    <div className="grid gap-1" style={gridStyle}>
      {grid
        .getCols()
        .flat()
        .map((tile) => (
          <MinesweeperTileButton
            tile={tile}
            key={`${tile.position.row},${tile.position.col}`}
            handleFlag={handleFlag}
            handleReveal={handleReveal}
            gameOver={grid.isGameOver()}
          />
        ))}
    </div>
  );

  useEffect(() => {
    const started = grid.rows.some((row) =>
      row.some((tile) => !tile.flags.hidden)
    );
    const gameOver = grid.isGameOver();
    if (started && !gameOver) {
      timer.enable();
    }

    if (gameOver) {
      timer.disable();
    }
  }, [grid, timer]);

  function handleRestart(): void {
    dispatch({ type: "RESET", settings: INTERMEDIATE_SETTINGS });
    timer.reset();
  }

  return (
    <Layout>
      <div className="mx-auto sm:w-11/12 md:w-10/12 lg:w-8/12 xl:w-7/12 2xl:w-6/12 mt-4">
        <H1>Minesweeper</H1>
        <P>
          I decided to make a game of minesweeper in typescript. I chose
          minesweeper because more or less everyone knows the rules, so it
          should be a good way to showcase my frontend and systems skills. Check
          out the code{" "}
          <a
            className="underline text-blue-500"
            href="https://github.dev/BenMcLean981/BenMcLean981.github.io/blob/main/src/pages/minesweeper.tsx"
            target="_blank"
            rel="noreferrer"
          >
            here!
          </a>
        </P>
        <Divider />

        <GameBanner grid={grid} onReset={handleRestart} timer={timer} />
        {gridComponent}
      </div>
    </Layout>
  );
}
