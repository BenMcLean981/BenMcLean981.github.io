import { act, renderHook } from "@testing-library/react-hooks";

import { useTimer } from "../useTimer";

describe("useTimer.", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("Runs a timer if enabled.", () => {
    const { result } = renderHook(() => useTimer());
    expect(result.current.seconds).toBe(0);

    act(() => {
      result.current.enable();
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
    act(() => {
      result.current.enable();
    });

    expect(result.current.isEnabled).toBe(true);
    act(() => {
      result.current.disable();
    });

    expect(result.current.isEnabled).toBe(false);
  });

  it("resets to zero.", () => {
    const { result } = renderHook(() => useTimer());
    expect(result.current.seconds).toBe(0);

    act(() => {
      result.current.enable();
      jest.advanceTimersByTime(1000);
    });
    expect(result.current.seconds).toBeCloseTo(1, 8);

    act(() => {
      result.current.reset();
    });
    expect(result.current.seconds).toBe(0);
    expect(result.current.isEnabled).toBe(false);
  });

  it("Formats correctly for seconds < 10.", () => {
    const { result } = renderHook(() => useTimer());
    expect(result.current.seconds).toBe(0);

    act(() => {
      result.current.enable();
      jest.advanceTimersByTime(1234);
    });
    expect(result.current.format()).toBe("1.2");
  });

  it("Formats correctly for 10 < seconds < 60.", () => {
    const { result } = renderHook(() => useTimer());
    expect(result.current.seconds).toBe(0);

    act(() => {
      result.current.enable();
      jest.advanceTimersByTime(12345);
    });
    expect(result.current.format()).toBe("12.3");
  });

  it("Formats correctly seconds > 60.", () => {
    const { result } = renderHook(() => useTimer());
    expect(result.current.seconds).toBe(0);

    act(() => {
      result.current.enable();
      jest.advanceTimersByTime(123456);
    });
    expect(result.current.format()).toBe("2:03.4");
  });
});
