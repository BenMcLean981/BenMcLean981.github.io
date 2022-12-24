import React from "react";
import { fireEvent, renderHook } from "@testing-library/react";
import { useOutsideAlerter } from "../../hooks/useOutsideAlerter";

describe("useOutsideAlerter.test.tsx", () => {
  it("does not run the callback when not clicked away.", () => {
    const ref = React.createRef<HTMLDivElement>();
    const callback = jest.fn();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <div ref={ref}>{children}</div>
    );
    const { result } = renderHook(() => useOutsideAlerter(ref, callback), {
      wrapper,
    });

    expect(result.current).toBeUndefined();
    expect(callback).toHaveBeenCalledTimes(0);

    ref.current?.click();

    expect(callback).toHaveBeenCalledTimes(0);
  });

  it("runs callback when clicked away.", () => {
    const ref = React.createRef<HTMLDivElement>();
    const callback = jest.fn();
    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <div>
        <div ref={ref}>{children}</div>
        <button />
      </div>
    );
    const { result } = renderHook(() => useOutsideAlerter(ref, callback), {
      wrapper,
    });

    expect(result.current).toBeUndefined();
    expect(callback).toHaveBeenCalledTimes(0);

    fireEvent.touchStart(document);

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
