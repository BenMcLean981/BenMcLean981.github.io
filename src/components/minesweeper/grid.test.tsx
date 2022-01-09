import { MinesweeperTile } from "./tile";
import { MinesweeperGrid, MinesweeperGridContainer } from "./grid";
import { Position } from "./position";
import { render, screen } from "@testing-library/react";

describe("MinesweeperGrid", () => {
  describe("init.", () => {
    it("applies the correct number of rows and cols.", () => {
      const grid = MinesweeperGrid.init({ rows: 3, cols: 4, mines: 0 });
      expect(grid.rows.length).toBe(3);
      expect(grid.rows[0].length).toBe(4);
      expect(grid.rows[1].length).toBe(4);
      expect(grid.rows[2].length).toBe(4);
    })
  })

  describe("getTile", () => {
    it("Gets the given tile when it exists.", () => {
      const grid = MinesweeperGrid.init({ rows: 3, cols: 2, mines: 0 });
      const tile = grid.rows[1][0];

      expect(grid.getTile(tile.position)).toEqual(tile);
      expect(grid.getTile(tile.position)).not.toBe(tile);
    });

    it("Returns undefined for row too small.", () => {
      const grid = MinesweeperGrid.init({ rows: 3, cols: 2, mines: 0 });
      expect(grid.getTile(new Position(0, 1))).toBeUndefined();
    });

    it("Returns undefined for col too small.", () => {
      const grid = MinesweeperGrid.init({ rows: 3, cols: 2, mines: 0 });
      expect(grid.getTile(new Position(1, 0))).toBeUndefined();
    });

    it("Returns undefined for row too large.", () => {
      const grid = MinesweeperGrid.init({ rows: 3, cols: 2, mines: 0 });
      expect(grid.getTile(new Position(4, 1))).toBeUndefined();
    });

    it("Returns undefined for col too large.", () => {
      const grid = MinesweeperGrid.init({ rows: 3, cols: 2, mines: 0 });
      expect(grid.getTile(new Position(2, 3))).toBeUndefined();
    });
  })

  describe("minePosition.", () => {
    it("Mines the given position.", () => {
      const grid = MinesweeperGrid.init({ rows: 3, cols: 2, mines: 0 });
      const minedGrid = grid.minePosition(new Position(2, 1));

      expect(minedGrid.getTile(new Position(2, 1))?.flags.mined).toBe(true);
    });

    it("Does not change the grid if the position is not valid.", () => {
      const grid = MinesweeperGrid.init({ rows: 3, cols: 2, mines: 0 });
      const minedGrid = grid.minePosition(new Position(0, 0));

      expect(minedGrid).toEqual(grid);
    });
  })

  describe("mine", () => {
    it("Does nothing with no mines.", () => {
      const grid = MinesweeperGrid.init({ rows: 3, cols: 2, mines: 0 });
      const mineGrid = grid.mine();
      expect(mineGrid).toEqual(grid);
    })

    it("Applies correct number of mines.", () => {
      const grid = MinesweeperGrid.init({ rows: 3, cols: 2, mines: 3 });
      const mineGrid = grid.mine();
      const numMines = mineGrid.rows.reduce((acc, row) => {
        return acc + row.reduce((acc, tile) => {
          return acc + (tile.flags.mined ? 1 : 0);
        }, 0);
      }, 0);

      expect(numMines).toBe(3);
      expect(grid).not.toEqual(mineGrid);
    })
  })

  describe("getNeighbors", () => {
    it("Returns the correct neighbors.", () => {
      const grid = MinesweeperGrid.init({ rows: 3, cols: 2, mines: 0 });
      const neighbors = grid.getNeighbors(new Position(2, 1));
      expect(neighbors.length).toBe(5);
      expect(neighbors).toEqual([
        grid.getTile(new Position(1, 1)),
        grid.getTile(new Position(1, 2)),
        grid.getTile(new Position(2, 2)),
        grid.getTile(new Position(3, 1)),
        grid.getTile(new Position(3, 2)),
      ]);
    })
  })

  describe("countNeighboringMines", () => {
    it("Returns the correct number of mines.", () => {
      const grid = MinesweeperGrid.init({ rows: 3, cols: 2, mines: 3 })
        .minePosition(new Position(1, 1))
        .minePosition(new Position(1, 2))
        .minePosition(new Position(2, 2));


      expect(grid.countNeighboringMines(new Position(2, 1))).toBe(3);
    })
  })
})

describe("gridComponent.", () => {
  it("Renders the correct number of grid cells.", () => {
    render(<MinesweeperGridContainer settings={{ rows: 3, cols: 2, mines: 0 }} />);

    expect(screen.getAllByRole("button").length).toBe(6);
  })
})