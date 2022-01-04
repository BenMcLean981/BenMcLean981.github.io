import { notUndefined } from "./notUndefined";

describe("notUndefined", () => {
  it("returns true for null", () => {
    expect(notUndefined(null)).toBe(true);
  });

  it("returns true for string", () => {
    expect(notUndefined("")).toBe(true);
  });

  it("returns true for number", () => {
    expect(notUndefined(0)).toBe(true);
  });

  it("returns false for undefined", () => {
    expect(notUndefined(undefined)).toBe(false);
  });
});
