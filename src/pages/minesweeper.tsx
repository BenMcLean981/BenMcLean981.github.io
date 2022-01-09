import { Layout } from "components/layout";
import { gridReducer } from "components/minesweeper/gridReducer";
import { Position } from "components/minesweeper/position";
import { MinesweeperTile, MinesweeperTileButton } from "components/minesweeper/tile";
import React, { useReducer, useState } from "react";
import { MinesweeperGrid } from "../components/minesweeper/grid";
import { GridSettings } from "../components/minesweeper/gridSettings";

const BEGINNER_SETTINGS: GridSettings = {
    rows: 9,
    cols: 9,
    mines: 10
}

const INTERMEDIATE_SETTINGS: GridSettings = {
    rows: 16,
    cols: 16,
    mines: 40
}

const EXPERT_SETTINGS: GridSettings = {
    rows: 16,
    cols: 30,
    mines: 99
}

//to simplify screen size, only supporting intermediate settings.

export function Minesweeper() {
    const [settings, setSettings] = useState(INTERMEDIATE_SETTINGS);
    const [grid, dispatch] = useReducer(gridReducer, MinesweeperGrid.init(settings));

    //need some way to fit the grid into the window

    function handleFlag(t: MinesweeperTile): void {
        dispatch({ type: "FLAG", tile: t });
    }

    function handleReveal(t: MinesweeperTile): void {
        dispatch({ type: "REVEAL", tile: t });
    }

    const gridStyle: React.CSSProperties = { gridTemplateColumns: `repeat(${grid.size.cols}, minmax(0, 1fr))` };

    return <Layout>
        <div className={`grid gap-1 mx-auto sm:w-10/12 md:w-9/12 lg:w-7/12 xl:w-6/12 2xl:w-5/12 mt-4`} style={gridStyle}>
            {grid.getCols().flat().map((tile) =>
                (<MinesweeperTileButton tile={tile} key={`${tile.position.row},${tile.position.col}`} handleFlag={handleFlag} handleReveal={handleReveal} />))
            }
        </div>
    </Layout >;
}