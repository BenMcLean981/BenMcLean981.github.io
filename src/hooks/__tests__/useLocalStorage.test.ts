import { renderHook } from "@testing-library/react";
import { useLocalStorage } from "../useLocalStorage";

type Store = {
  [key: string]: string | null;
};

let mockStorage: Store = {};

beforeEach(() => {
  mockStorage = {};

  global.Storage.prototype.setItem = jest.fn((key: string, value: any) => {
    mockStorage[key] = value;
  });

  global.Storage.prototype.getItem = jest.fn((key: string) => {
    return mockStorage[key];
  });

  global.Storage.prototype.removeItem = jest.fn((key: string) => {
    delete mockStorage[key];
  });
});

describe("useLocalStorage", () => {
  it("returns null for an item not in local storage.", () => {
    const { result } = renderHook(() => useLocalStorage("foo"));

    expect(global.Storage.prototype.getItem).toHaveBeenCalledTimes(1);

    expect(result.current[0]).toBeNull();
  });

  it("returns value for an item in local storage.", () => {
    global.Storage.prototype.setItem("foo", "bar");

    const { result } = renderHook(() => useLocalStorage("foo"));

    expect(global.Storage.prototype.getItem).toHaveBeenCalledTimes(1);
    expect(result.current[0]).toEqual("bar");
  });

  it("returns a default value when nothing is set in key and sets value in store.", () => {
    const { result } = renderHook(() => useLocalStorage("foo", "bar"));

    expect(global.Storage.prototype.getItem).toHaveBeenCalledTimes(1);
    expect(global.Storage.prototype.setItem).toHaveBeenCalledTimes(1);

    expect(result.current[0]).toEqual("bar");
    expect(mockStorage["foo"]).toEqual("bar");
  });
});

it("returns non-default when default is passed but value is in store.", () => {
  global.Storage.prototype.setItem("foo", "foo");

  const { result } = renderHook(() => useLocalStorage("foo", "bar"));

  expect(global.Storage.prototype.getItem).toHaveBeenCalledTimes(1);

  expect(result.current[0]).toEqual("foo");
  expect(mockStorage["foo"]).toEqual("foo");
});
