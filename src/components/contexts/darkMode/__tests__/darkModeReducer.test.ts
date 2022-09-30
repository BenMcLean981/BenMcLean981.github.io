import { darkModeReducer } from "../darkModeReducer";

describe("darkModeReducer.", () => {
  it("toggles correctly.", () => {
    expect(darkModeReducer(false, { type: "TOGGLE" })).toBe(true);
    expect(darkModeReducer(true, { type: "TOGGLE" })).toBe(false);
  });

  it("enables correctly.", () => {
    expect(darkModeReducer(false, { type: "ENABLE" })).toBe(true);
    expect(darkModeReducer(true, { type: "ENABLE" })).toBe(true);
  });

  it("disables correctly.", () => {
    expect(darkModeReducer(false, { type: "DISABLE" })).toBe(false);
    expect(darkModeReducer(true, { type: "DISABLE" })).toBe(false);
  });
});
