import React from "react";
import { MinesweeperGrid } from "./grid";
import { Position } from "./position";

type GridAction =
    | { type: "revealTile"; pos: Position }
    | { type: "toggleFlagTile"; pos: Position }
    | { type: "revealGrid" };

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
        case "revealTile":
            return grid.reveal(action.pos)
        case "toggleFlagTile":
            return grid.toggleFlag(action.pos);
        case "revealGrid":
            return grid.revealAll();
    }
};