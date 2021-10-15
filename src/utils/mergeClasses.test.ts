import { mergeClasses } from "./mergeClasses";

describe("mergeClasses", () => {
  it("Returns a list of classes seperated by a space.", () => {
    expect(mergeClasses("p-6", "bt", "bg-black")).toEqual("p-6 bt bg-black");
  });

  it("Handles a singular class with no space.", () => {
    expect(mergeClasses("p-6")).toEqual("p-6");
  });

  it("Returns an empty string for an empty array input", () => {
    expect(mergeClasses()).toEqual("");
  });
});
