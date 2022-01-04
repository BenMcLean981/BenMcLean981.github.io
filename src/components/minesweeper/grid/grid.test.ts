import { fillGrid, initializeGrid, makeGridTiles, minePosition } from "./grid";

import { makeTile } from "./tile";

describe("fillGrid", () => {
  it("Doesnt do anything with no mines.", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 0 });
    const filled = fillGrid(grid);

    expect(filled).toEqual(grid);
  });

  it("Changes the grid with mines != 0.", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 3 });
    const filled = fillGrid(grid);

    expect(filled).not.toEqual(grid);
  });
});

describe("minePosition", () => {
  it("Mines the given position", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 3 });
    const mined = minePosition(grid, { row: 1, col: 2 });

    expect(mined.tiles[0][1].mined).toBe(true);
  });

  it("Doesn't change the current grid.", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 3 });
    const mined = minePosition(grid, { row: 1, col: 2 });

    expect(mined).not.toEqual(grid);
  });
});

describe("makeGridTiles", () => {
  it("creates an empty grid of the given dimensions.", () => {
    expect(makeGridTiles({ rows: 3, cols: 2, mines: 0 })).toEqual([
      [makeTile(0, 0), makeTile(0, 1)],
      [makeTile(1, 0), makeTile(1, 1)],
      [makeTile(2, 0), makeTile(2, 1)],
    ]);
  });
});
