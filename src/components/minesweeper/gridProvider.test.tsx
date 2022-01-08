import { MinesweeperGrid } from './grid';
import { gridReducer } from './gridProvider';
import { Position } from './position';

describe("gridReducer", () => {
    it("Reveals tile correctly.", () => {
        const grid = MinesweeperGrid.make({ rows: 3, cols: 2, mines: 3 });

        const pos = new Position(2, 1);
        const nextGrid = gridReducer(grid, { type: "revealTile", pos });
        expect(nextGrid.getTile(pos)?.flags.hidden).toBe(false);
        expect(nextGrid.getTile(new Position(pos.row, pos.col + 1))?.flags.hidden).toBe(true);
    })

    it("Flags tile correctly.", () => {
        const grid = MinesweeperGrid.make({ rows: 3, cols: 2, mines: 3 });

        const pos = new Position(2, 1);
        const nextGrid = gridReducer(grid, { type: "toggleFlagTile", pos });
        expect(nextGrid.getTile(pos)?.flags.flagged).toBe(true);
        expect(nextGrid.getTile(new Position(pos.row, pos.col + 1))?.flags.flagged).toBe(false);
    })

    it("reveals grid correctly.", () => {
        const grid = MinesweeperGrid.make({ rows: 3, cols: 2, mines: 3 });

        const nextGrid = gridReducer(grid, { type: "revealGrid" });
        expect(nextGrid.rows.every(row => row.every(tile => !tile.flags.hidden))).toBe(true);
    })
})