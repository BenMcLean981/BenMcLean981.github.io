import { makeEmptyGrid, makeTile, validateGridSettings } from "./grid";

describe("validateGridSettings", () => {
  it("does nothing when mines < numCells", () => {
    expect(() => validateGridSettings(10, 10, 10)).not.toThrowError();
  });

  it("throws an error when mines = numCells", () => {
    expect(() => validateGridSettings(10, 10, 100)).toThrow(
      "Number of mines too large, all tiles will be mined."
    );
  });

  it("throws an error when mines > numCells", () => {
    expect(() => validateGridSettings(10, 10, 101)).toThrow(
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
      row: 2,
      col: 3,
    });
  });
});

describe("makeEmptyGrid", () => {
  it("creates an empty grid of the given dimensions.", () => {
    expect(makeEmptyGrid(3, 2)).toEqual([
      [makeTile(0, 0), makeTile(0, 1)],
      [makeTile(1, 0), makeTile(1, 1)],
      [makeTile(2, 0), makeTile(2, 1)],
    ]);
  });
});
