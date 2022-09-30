import { Position } from "../position";
const seedrandom = require("seedrandom");

describe("class Position", () => {
  describe("equals", () => {
    it("returns true when positions are equal", () => {
      const position = new Position(1, 2);
      const other = new Position(1, 2);
      expect(position.equals(other)).toBe(true);
    });

    it("returns false when rows are not equal", () => {
      const position = new Position(1, 2);
      const other = new Position(2, 2);
      expect(position.equals(other)).toBe(false);
    });

    it("returns false when cols are not equal", () => {
      const position = new Position(1, 2);
      const other = new Position(1, 3);
      expect(position.equals(other)).toBe(false);
    });
  });

  describe("makeRandom", () => {
    it("Generates consistent position w/ same seed.", () => {
      const first = Position.makeRandom(
        { rows: 2, cols: 3, mines: 0 },
        new seedrandom(1)
      );
      const second = Position.makeRandom(
        { rows: 2, cols: 3, mines: 0 },
        new seedrandom(1)
      );

      expect(first).toEqual(second);
    });

    it("Generates different position with same prng.", () => {
      const prng = new seedrandom(1);

      const first = Position.makeRandom({ rows: 2, cols: 3, mines: 0 }, prng);
      const second = Position.makeRandom({ rows: 2, cols: 3, mines: 0 }, prng);

      expect(first).not.toEqual(second);
    });

    /*
     * I dont think this test is required because it's really
     * a test about the prng,
     * but I wanted to show that this is true about the prng
     *
     * */
    it("Generates different position with different seed.", () => {
      const first = Position.makeRandom(
        { rows: 2, cols: 3, mines: 0 },
        new seedrandom(1)
      );
      const second = Position.makeRandom(
        { rows: 2, cols: 3, mines: 0 },
        new seedrandom(2)
      );

      expect(first).not.toEqual(second);
    });

    it("Generates a valid pair (in range).", () => {
      const pair = Position.makeRandom(
        { rows: 1, cols: 1, mines: 0 },
        new seedrandom(1)
      );

      expect(pair.row).toEqual(1);
      expect(pair.col).toEqual(1);
    });
  });

  describe("getPossibleNeighbors", () => {
    it("generates 8 possible valid positions.", () => {
      const position = new Position(2, 3);
      const neighbors = position.getNeighboringPositions();

      expect(neighbors.length).toEqual(8);
      expect(neighbors).toEqual([
        { row: 1, col: 2 },
        { row: 1, col: 3 },
        { row: 1, col: 4 },
        { row: 2, col: 2 },
        { row: 2, col: 4 },
        { row: 3, col: 2 },
        { row: 3, col: 3 },
        { row: 3, col: 4 },
      ]);
    });
  });
});
