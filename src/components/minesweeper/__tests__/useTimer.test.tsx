import { Timer, useTimer } from "../useTimer";
import { act, renderHook } from "@testing-library/react-hooks";

describe("useTimer.", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("Runs a timer if enabled.", () => {
    const { result } = renderHook(() => useTimer());
    expect(result.current.seconds).toBe(0);
    result.current.enable();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.seconds).toBeCloseTo(1, 8);
  });

  it("Does not run a timer if disabled", () => {
    const { result } = renderHook(() => useTimer());
    expect(result.current.seconds).toBe(0);
    result.current.disable();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.seconds).toBeCloseTo(0, 8);
  });

  it("Does not run a timer if disabled (default)", () => {
    const { result } = renderHook(() => useTimer());
    expect(result.current.seconds).toBe(0);
    result.current.disable();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(result.current.seconds).toBeCloseTo(0, 8);
  });

  it("respects isEnabled.", () => {
    const { result } = renderHook(() => useTimer());
    expect(result.current.seconds).toBe(0);

    expect(result.current.isEnabled).toBe(false);
    result.current.enable();

    expect(result.current.isEnabled).toBe(true);
    result.current.disable();

    expect(result.current.isEnabled).toBe(false);
  });

  it("resets to zero.", () => {
    const { result } = renderHook(() => useTimer());
    expect(result.current.seconds).toBe(0);

    result.current.enable();
    act(() => {
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.seconds).toBeCloseTo(1, 8);

    result.current.reset();
    expect(result.current.seconds).toBe(0);
    expect(result.current.isEnabled).toBe(false);
  });
});
