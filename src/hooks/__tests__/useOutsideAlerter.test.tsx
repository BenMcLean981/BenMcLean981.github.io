import React from "react";
import { fireEvent } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import { useOutsideAlterter } from "../../hooks/useOutsideAlerter";

describe("useOutsideAlerter.test.tsx", () => {
  it("does not run the callback when not clicked away.", () => {
    const ref = React.createRef<HTMLDivElement>();
    const callback = jest.fn();
    const wrapper = ({ children }: { children: React.ReactChildren }) => (
      <div>{children}</div>
    );
    const { result } = renderHook(() => useOutsideAlterter(ref, callback), {
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
    const wrapper = ({ children }: { children: React.ReactChildren }) => (
      <div>
        <div ref={ref}>{children}</div>
        <button />
      </div>
    );
    const { result } = renderHook(() => useOutsideAlterter(ref, callback), {
      wrapper,
    });

    expect(result.current).toBeUndefined();
    expect(callback).toHaveBeenCalledTimes(0);

    fireEvent.touchStart(document);

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
