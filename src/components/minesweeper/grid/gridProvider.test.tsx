import { getTile, makeGrid } from './grid';
import { gridReducer } from './gridProvider';
import { Position } from './position';

describe("gridReducer", () => {
    it("Reveals tile correctly.", () => {
        const grid = makeGrid({ rows: 3, cols: 2, mines: 3 });

        const pos: Position = { row: 2, col: 1 };
        const nextGrid = gridReducer(grid, { type: "revealTile", pos });
        expect(getTile(nextGrid, pos)?.hidden).toBe(false);
        expect(getTile(nextGrid, { row: pos.row, col: pos.col + 1 })?.hidden).toBe(true);
    })

    it("Flags tile correctly.", () => {
        const grid = makeGrid({ rows: 3, cols: 2, mines: 3 });

        const pos: Position = { row: 2, col: 1 };
        const nextGrid = gridReducer(grid, { type: "toggleFlagTile", pos });
        expect(getTile(nextGrid, pos)?.flagged).toBe(true);
        expect(getTile(nextGrid, { row: pos.row, col: pos.col + 1 })?.flagged).toBe(false);
    })
})