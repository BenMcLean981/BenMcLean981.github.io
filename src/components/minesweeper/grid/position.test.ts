import { Position, generateRandomPosition, isPositionEqual } from "./position";
const seedrandom = require("seedrandom");

describe("isPositionEqual", () => {
  it("returns true when positions are equal", () => {
    expect(isPositionEqual({ row: 1, col: 1 }, { row: 1, col: 1 })).toBe(true);
  });

  it("returns false when positions are not equal", () => {
    expect(isPositionEqual({ row: 1, col: 1 }, { row: 2, col: 1 })).toBe(false);
  });
});

describe("generateRandomPositions", () => {
  it("Generates consistent position w/ same seed.", () => {
    const first = generateRandomPosition(
      { rows: 2, cols: 3, mines: 0 },
      [],
      new seedrandom(1)
    );
    const second = generateRandomPosition(
      { rows: 2, cols: 3, mines: 0 },
      [],
      new seedrandom(1)
    );

    expect(first).toEqual(second);
  });

  it("Generates different position with same prng.", () => {
    const prng = new seedrandom(1);

    const first = generateRandomPosition(
      { rows: 2, cols: 3, mines: 0 },
      [],
      prng
    );
    const second = generateRandomPosition(
      { rows: 2, cols: 3, mines: 0 },
      [],
      prng
    );

    expect(first).not.toEqual(second);
  });

  /*
   * I dont think this test is required because it's really
   * a test about the prng,
   * but I wanted to show that this is true about the prng
   *
   * */
  it("Generates different position with different seed.", () => {
    const first = generateRandomPosition(
      { rows: 2, cols: 3, mines: 0 },
      [],
      new seedrandom(1)
    );
    const second = generateRandomPosition(
      { rows: 2, cols: 3, mines: 0 },
      [],
      new seedrandom(2)
    );

    expect(first).not.toEqual(second);
  });

  it("Generates a valid pair.", () => {
    const pair = generateRandomPosition(
      { rows: 1, cols: 1, mines: 0 },
      [],
      new seedrandom(1)
    );

    expect(pair.row).toEqual(1);
    expect(pair.col).toEqual(1);
  });
});
