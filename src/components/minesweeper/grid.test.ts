import {
  generateRandomPair,
  makeGridTiles,
  makeTile,
  validateGridSettings,
} from "./grid";
const seedrandom = require("seedrandom");

describe("validateGridSettings", () => {
  it("does nothing when mines < numCells", () => {
    expect(() =>
      validateGridSettings({ rows: 2, cols: 3, mines: 5 })
    ).not.toThrowError();
  });

  it("throws an error when mines = numCells", () => {
    expect(() => validateGridSettings({ rows: 2, cols: 3, mines: 6 })).toThrow(
      "Number of mines too large, all tiles will be mined."
    );
  });

  it("throws an error when mines > numCells", () => {
    expect(() => validateGridSettings({ rows: 2, cols: 3, mines: 7 })).toThrow(
      "Number of mines too large, all tiles will be mined."
    );
  });
});

describe("makeTile", () => {
  it("Makes a tile from the given row and column", () => {
    expect(makeTile(2, 3)).toEqual({
      flagged: false,
      hidden: true,
      mined: false,
      position: { row: 2, col: 3 },
    });
  });
});

describe("makeEmptyGrid", () => {
  it("creates an empty grid of the given dimensions.", () => {
    expect(makeGridTiles({ rows: 3, cols: 2, mines: 0 })).toEqual([
      [makeTile(0, 0), makeTile(0, 1)],
      [makeTile(1, 0), makeTile(1, 1)],
      [makeTile(2, 0), makeTile(2, 1)],
    ]);
  });
});

describe("generateRandomPair", () => {
  it("Generates consistent pairs w/ same seed.", () => {
    const first = generateRandomPair(
      { rows: 2, cols: 3, mines: 0 },
      [],
      new seedrandom(1)
    );
    const second = generateRandomPair(
      { rows: 2, cols: 3, mines: 0 },
      [],
      new seedrandom(1)
    );

    expect(first).toEqual(second);
  });

  it("Generates different pairs with same prng.", () => {
    const prng = new seedrandom(1);

    const first = generateRandomPair({ rows: 2, cols: 3, mines: 0 }, [], prng);
    const second = generateRandomPair({ rows: 2, cols: 3, mines: 0 }, [], prng);

    expect(first).not.toEqual(second);
  });

  /*
   * I dont think this test is required because it's really
   * a test about the prng,
   * but I wanted to show that this is true about the prng
   *
   * */
  it("Generates different pairs with different seed.", () => {
    const first = generateRandomPair(
      { rows: 2, cols: 3, mines: 0 },
      [],
      new seedrandom(1)
    );
    const second = generateRandomPair(
      { rows: 2, cols: 3, mines: 0 },
      [],
      new seedrandom(2)
    );

    expect(first).not.toEqual(second);
  });
});
