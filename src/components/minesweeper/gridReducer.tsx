import React from "react";
import { MinesweeperGrid } from "./grid";
import { MinesweeperTile } from "./tile";

type GridAction =
    | { type: "REVEAL"; tile: MinesweeperTile }
    | { type: "FLAG"; tile: MinesweeperTile }

type GridDispatch = (action: GridAction) => void;

type GridContext = {
    state: MinesweeperGrid;
    dispatch: GridDispatch;
};

export const minesweeperGridContext = React.createContext<
    GridContext | undefined
>(undefined);

export const gridReducer: React.Reducer<MinesweeperGrid, GridAction> = (
    grid,
    action
) => {
    switch (action.type) {
        case "REVEAL":
            return grid.reveal(action.tile.position)
        case "FLAG":
            return grid.toggleFlag(action.tile.position);
    }
};