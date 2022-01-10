import { MinesweeperTile } from "../tile";
import { Position } from "../position";

describe("MinesweeperTile", () => {
  describe("makeTile", () => {
    it("Makes a tile from the given row and column", () => {
      const tile = MinesweeperTile.makeTile(new Position(1, 2));
      expect(tile.position.row).toBe(1);
      expect(tile.position.col).toBe(2);

      expect(tile.flags.mined).toBe(false);
      expect(tile.flags.flagged).toBe(false);
      expect(tile.flags.hidden).toBe(true);

      expect(tile.nAdjMines).toBeUndefined();
    });
  });

  describe("mine.", () => {
    it("Mines the tile", () => {
      const tile = MinesweeperTile.makeTile(new Position(1, 2));
      expect(tile.flags.mined).toBe(false);

      const mined = tile.mine();
      expect(mined).not.toBe(tile);
      expect(mined.flags.mined).toBe(true);

      const toggle = tile.mine();
      expect(toggle.flags.mined).toBe(true);
    });
  });

  describe("reveal.", () => {
    it("Reaveals the tile", () => {
      const tile = MinesweeperTile.makeTile(new Position(1, 2));
      expect(tile.flags.hidden).toBe(true);

      const revealed = tile.reveal();
      expect(revealed).not.toBe(tile);
      expect(revealed.flags.hidden).toBe(false);

      const toggle = tile.reveal();
      expect(toggle.flags.hidden).toBe(false);
    });
  });

  describe("toggleFlag", () => {
    it("toggles the flag attribute.", () => {
      const tile = MinesweeperTile.makeTile(new Position(1, 2));
      expect(tile.flags.flagged).toBe(false);

      const flagged = tile.toggleFlag();
      expect(flagged).not.toBe(tile);
      expect(flagged.flags.flagged).toBe(true);

      const unflagged = flagged.toggleFlag();
      expect(unflagged.flags.flagged).toBe(false);
    });
  });

  describe("copy.", () => {
    it("Returns a copy of the tile.", () => {
      const tile = MinesweeperTile.makeTile(new Position(1, 2));
      const copy = tile.copy();
      expect(copy).not.toBe(tile);
      expect(copy.position).not.toBe(tile.position);
      expect(copy.flags).not.toBe(tile.flags);
      expect(copy.nAdjMines).toBe(tile.nAdjMines);
    });
  });
});
