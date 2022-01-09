import { MinesweeperTile } from "./tile";
import { MinesweeperGrid } from "./grid";
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
    });
  });

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
  });

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
  });

  describe("applyNumbering", () => {
    it("Sets all to zero with no mines.", () => {
      const grid = MinesweeperGrid.init({ rows: 3, cols: 2, mines: 0 });
      const numberedGrid = grid.mine().applyNumbering();
      expect(numberedGrid.rows.flat().every((t) => t.nAdjMines === 0)).toBe(
        true
      );
    });
  });

  describe("make", () => {
    it("Applies correct number of mines.", () => {
      const grid = MinesweeperGrid.make({ rows: 3, cols: 2, mines: 3 });
      const numMines = grid.rows.reduce((acc, row) => {
        return (
          acc +
          row.reduce((acc, tile) => {
            return acc + (tile.flags.mined ? 1 : 0);
          }, 0)
        );
      }, 0);

      expect(numMines).toBe(3);
    });

    it("Applies correct numbers.", () => {
      const grid = MinesweeperGrid.make({ rows: 3, cols: 2, mines: 0 });

      expect(grid.rows.flat().every((t) => t.nAdjMines === 0)).toBe(true);
    });
  });

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
    });
  });

  describe("countNeighboringMines", () => {
    it("Returns the correct number of mines.", () => {
      const grid = MinesweeperGrid.init({ rows: 3, cols: 2, mines: 3 })
        .minePosition(new Position(1, 1))
        .minePosition(new Position(1, 2))
        .minePosition(new Position(2, 2));

      expect(grid.countNeighboringMines(new Position(2, 1))).toBe(3);
    });
  });

  describe("getCols", () => {
    it("Returns a rotation of the grid.", () => {
      const grid = MinesweeperGrid.init({ rows: 3, cols: 2, mines: 0 });
      const cols = grid.getCols();

      expect(cols.length).toBe(2);
      expect(cols[0].length).toBe(3);
      expect(cols[0][0].position).toEqual(new Position(1, 1));
      expect(cols[0][1].position).toEqual(new Position(2, 1));
      expect(cols[0][2].position).toEqual(new Position(3, 1));
      expect(cols[1].length).toBe(3);
      expect(cols[1][0].position).toEqual(new Position(1, 2));
      expect(cols[1][1].position).toEqual(new Position(2, 2));
      expect(cols[1][2].position).toEqual(new Position(3, 2));
    });
  });

  describe("isMine", () => {
    const grid = new MinesweeperGrid(
      [
        [
          MinesweeperTile.makeTile(new Position(1, 1)).mine().applyNumber(1),
          MinesweeperTile.makeTile(new Position(1, 2)).mine().applyNumber(2),
          MinesweeperTile.makeTile(new Position(1, 3)).mine().applyNumber(1),
        ],
        [
          MinesweeperTile.makeTile(new Position(2, 1)).applyNumber(2),
          MinesweeperTile.makeTile(new Position(2, 2)).applyNumber(3),
          MinesweeperTile.makeTile(new Position(2, 3)).applyNumber(2),
        ],
        [
          MinesweeperTile.makeTile(new Position(3, 1)),
          MinesweeperTile.makeTile(new Position(3, 2)),
          MinesweeperTile.makeTile(new Position(3, 3)),
        ],
      ],

      { rows: 3, cols: 3, mines: 3 }
    );

    expect(grid.isMine(new Position(1, 1))).toBe(true);
    expect(grid.isMine(new Position(2, 2))).toBe(false);
  });

  describe("revealPosition", () => {
    const grid = new MinesweeperGrid(
      [
        [
          MinesweeperTile.makeTile(new Position(1, 1)).mine().applyNumber(1),
          MinesweeperTile.makeTile(new Position(1, 2)).mine().applyNumber(2),
          MinesweeperTile.makeTile(new Position(1, 3)).mine().applyNumber(1),
        ],
        [
          MinesweeperTile.makeTile(new Position(2, 1)).applyNumber(2),
          MinesweeperTile.makeTile(new Position(2, 2)).applyNumber(3),
          MinesweeperTile.makeTile(new Position(2, 3)).applyNumber(2),
        ],
        [
          MinesweeperTile.makeTile(new Position(3, 1)),
          MinesweeperTile.makeTile(new Position(3, 2)),
          MinesweeperTile.makeTile(new Position(3, 3)),
        ],
      ],

      { rows: 3, cols: 3, mines: 3 }
    );

    const pos = new Position(2, 1);
    const revealed = grid.revealPosition(pos);
    expect(revealed.getTile(pos)?.flags.hidden).toBe(false);

    expect(revealed.getTile(new Position(1, 1))?.flags.hidden).toBe(true);
    expect(revealed.getTile(new Position(2, 2))?.flags.hidden).toBe(true);
    expect(revealed.getTile(new Position(3, 1))?.flags.hidden).toBe(true);
  });

  describe("reveal", () => {
    const grid = new MinesweeperGrid(
      [
        [
          MinesweeperTile.makeTile(new Position(1, 1)).mine().applyNumber(1),
          MinesweeperTile.makeTile(new Position(1, 2)).mine().applyNumber(2),
          MinesweeperTile.makeTile(new Position(1, 3)).mine().applyNumber(1),
        ],
        [
          MinesweeperTile.makeTile(new Position(2, 1)).applyNumber(2),
          MinesweeperTile.makeTile(new Position(2, 2)).applyNumber(3),
          MinesweeperTile.makeTile(new Position(2, 3)).applyNumber(2),
        ],
        [
          MinesweeperTile.makeTile(new Position(3, 1)),
          MinesweeperTile.makeTile(new Position(3, 2)),
          MinesweeperTile.makeTile(new Position(3, 3)),
        ],
      ],

      { rows: 3, cols: 3, mines: 3 }
    );

    const pos = new Position(2, 1);
    const revealed = grid.reveal(pos);
    expect(revealed.getTile(pos)?.flags.hidden).toBe(false);

    expect(revealed.getTile(new Position(1, 1))?.flags.hidden).toBe(true);
    expect(revealed.getTile(new Position(2, 2))?.flags.hidden).toBe(true);
    expect(revealed.getTile(new Position(3, 1))?.flags.hidden).toBe(true);
  });
});
