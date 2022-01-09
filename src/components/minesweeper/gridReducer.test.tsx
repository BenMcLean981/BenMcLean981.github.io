import { MinesweeperGrid } from "./grid";
import { gridReducer } from "./gridReducer";
import { Position } from "./position";
import { MinesweeperTile } from "./tile";

describe("gridReducer", () => {
    it("Reveals tile correctly.", () => {
        const grid = MinesweeperGrid.make({ rows: 3, cols: 2, mines: 3 });

        const pos = new Position(2, 1);
        const nextGrid = gridReducer(grid, { type: "REVEAL", tile: MinesweeperTile.makeTile(pos) });
        expect(nextGrid.getTile(pos)?.flags.hidden).toBe(false);
        expect(nextGrid.getTile(new Position(pos.row, pos.col + 1))?.flags.hidden).toBe(true);
    })

    it("Flags tile correctly.", () => {
        const grid = MinesweeperGrid.make({ rows: 3, cols: 2, mines: 3 });

        const pos = new Position(2, 1);
        const nextGrid = gridReducer(grid, { type: "FLAG", tile: MinesweeperTile.makeTile(pos) });
        expect(nextGrid.getTile(pos)?.flags.flagged).toBe(true);
        expect(nextGrid.getTile(new Position(pos.row, pos.col + 1))?.flags.flagged).toBe(false);
    })
})