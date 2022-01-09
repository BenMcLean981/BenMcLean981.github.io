import { validateGridSettings } from "./gridSettings";

describe("validateGridSettings", () => {
  it("Returns true when mines < cells", () => {
    expect(validateGridSettings({ rows: 2, cols: 3, mines: 5 })).toBe(true);
  });

  it("Returns false when mines = cells", () => {
    expect(validateGridSettings({ rows: 2, cols: 3, mines: 6 })).toBe(false);
  });

  it("Returns false when mines > cells", () => {
    expect(validateGridSettings({ rows: 2, cols: 3, mines: 7 })).toBe(false);
  });
});
