import { MinesweeperTile, makeTile } from "./tile";
import {
  countNeighboringMines,
  mineGrid,
  getNeighbors as getGridNeighbors,
  getTile,
  initializeGrid,
  makeGrid,
  makeGridTiles,
  minePosition,
} from "./grid";

describe("fillGrid", () => {
  it("Doesnt do anything with no mines.", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 0 });
    const filled = mineGrid(grid);

    expect(filled).toEqual(grid);
  });

  it("Changes the grid with mines != 0.", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 3 });
    const filled = mineGrid(grid);

    expect(filled).not.toEqual(grid);
  });
});

describe("minePosition", () => {
  it("Mines the given position", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 3 });
    const mined = minePosition(grid, { row: 1, col: 2 });

    expect(mined.rows[0][1].mined).toBe(true);
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
      [makeTile(1, 1), makeTile(1, 2)],
      [makeTile(2, 1), makeTile(2, 2)],
      [makeTile(3, 1), makeTile(3, 2)],
    ]);
  });
});

describe("getTile", () => {
  it("Gets the given tile when it exists.", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 0 });
    const tile = grid.rows[1][0];

    expect(getTile(grid, { row: 2, col: 1 })).toBe(tile);
  });

  it("Returns undefined for row too small.", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 0 });
    expect(getTile(grid, { row: 0, col: 1 })).toBeUndefined();
  });

  it("Returns undefined for col too small.", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 0 });
    expect(getTile(grid, { row: 1, col: 0 })).toBeUndefined();
  });

  it("Returns undefined for row too large.", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 0 });
    expect(getTile(grid, { row: 4, col: 1 })).toBeUndefined();
  });

  it("Returns undefined for col too large.", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 0 });
    expect(getTile(grid, { row: 3, col: 3 })).toBeUndefined();
  });
});

describe("getGridNeighbors", () => {
  it("returns no neighbors when the grid is too small.", () => {
    const grid = initializeGrid({ rows: 1, cols: 1, mines: 0 });

    expect(getGridNeighbors(grid, { row: 1, col: 1 })).toEqual([]);
  });

  it("Gets the neighbors of the given tile.", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 0 });

    expect(getGridNeighbors(grid, { row: 2, col: 1 })).toEqual([
      grid.rows[0][0],
      grid.rows[0][1],
      grid.rows[1][1],
      grid.rows[2][0],
      grid.rows[2][1],
    ]);
  });

  it("returns full list of neighbors.", () => {
    const grid = initializeGrid({ rows: 3, cols: 3, mines: 0 });

    expect(getGridNeighbors(grid, { row: 2, col: 2 })).toEqual([
      grid.rows[0][0],
      grid.rows[0][1],
      grid.rows[0][2],
      grid.rows[1][0],
      grid.rows[1][2],
      grid.rows[2][0],
      grid.rows[2][1],
      grid.rows[2][2],
    ]);
  });
});

describe("countNeighboringMines", () => {
  it("Returns zero for no mines.", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 0 });

    expect(countNeighboringMines(grid, { row: 2, col: 1 })).toBe(0);
  })

  it("Returns correct number of mines.", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 3 });
    const mined = mineGrid(grid);

    expect(countNeighboringMines(mined, { row: 2, col: 1 })).toBe(3);
  })
})

