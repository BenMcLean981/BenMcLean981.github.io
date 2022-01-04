import { MinesweeperTile, makeTile } from "./tile";
import {
  fillGrid,
  getNeighbors,
  getTile,
  initializeGrid,
  makeGridTiles,
  minePosition,
} from "./grid";

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
      [makeTile(1, 1), makeTile(1, 2)],
      [makeTile(2, 1), makeTile(2, 2)],
      [makeTile(3, 1), makeTile(3, 2)],
    ]);
  });
});

describe("getTile", () => {
  it("Gets the given tile when it exists.", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 0 });
    const tile = grid.tiles[1][0];

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

describe("getNeighbors", () => {
  it("returns no neighbors when the grid is too small.", () => {
    const grid = initializeGrid({ rows: 1, cols: 1, mines: 0 });
    const tile = grid.tiles[0][0];

    expect(getNeighbors(grid, tile)).toEqual([]);
  });

  it("Gets the neighbors of the given tile.", () => {
    const grid = initializeGrid({ rows: 3, cols: 2, mines: 0 });
    const tile = getTile(grid, { row: 2, col: 1 }) as MinesweeperTile; //has 5 neighbors

    expect(getNeighbors(grid, tile)).toEqual([
      grid.tiles[0][0],
      grid.tiles[0][1],
      grid.tiles[1][1],
      grid.tiles[2][0],
      grid.tiles[2][1],
    ]);
  });

  it("returns full list of neighbors.", () => {
    const grid = initializeGrid({ rows: 3, cols: 3, mines: 0 });
    const tile = grid.tiles[1][1]; //has 8 neighbors

    expect(getNeighbors(grid, tile)).toEqual([
      grid.tiles[0][0],
      grid.tiles[0][1],
      grid.tiles[0][2],
      grid.tiles[1][0],
      grid.tiles[1][2],
      grid.tiles[2][0],
      grid.tiles[2][1],
      grid.tiles[2][2],
    ]);
  });
});
