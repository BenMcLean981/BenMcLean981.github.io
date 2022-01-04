import { makeTile } from "./tile";

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
