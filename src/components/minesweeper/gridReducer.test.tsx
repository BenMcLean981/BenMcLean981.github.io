import { MinesweeperGrid } from "./grid";
import { MinesweeperTile } from "./tile";
import { Position } from "./position";
import { gridReducer } from "./gridReducer";

describe("gridReducer", () => {
  it("Reveals tile correctly.", () => {
    const minedPosition = new Position(1, 2);
    const revealedPosition = new Position(1, 1);

    const grid = MinesweeperGrid.init({
      rows: 1,
      cols: 2,
      mines: 0,
    })
      .minePosition(minedPosition)
      .applyNumbering();

    const nextGrid = gridReducer(grid, {
      type: "REVEAL",
      tile: grid.getTile(revealedPosition) as MinesweeperTile,
    });
    expect(nextGrid.getTile(revealedPosition)?.flags.hidden).toBe(false);
    expect(nextGrid.getTile(minedPosition)?.flags.hidden).toBe(true);
  });

  it("Flags tile correctly.", () => {
    const grid = MinesweeperGrid.make({ rows: 3, cols: 2, mines: 3 });

    const pos = new Position(2, 1);
    const nextGrid = gridReducer(grid, {
      type: "FLAG",
      tile: MinesweeperTile.makeTile(pos),
    });
    expect(nextGrid.getTile(pos)?.flags.flagged).toBe(true);
    expect(
      nextGrid.getTile(new Position(pos.row, pos.col + 1))?.flags.flagged
    ).toBe(false);
  });
});
