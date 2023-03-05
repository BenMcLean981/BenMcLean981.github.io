import { fireEvent, renderHook } from "@testing-library/react";
import React, { useRef } from "react";
import { act } from "react-dom/test-utils";
import { useLongPress } from "../useLongPress";

interface TestComponentProps {
  time: number;
  callback: VoidFunction;
}

function TestComponent(props: TestComponentProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useLongPress(ref, props.time, props.callback);

  return <div ref={ref} />;
}

describe("useLongPress", () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  it("Triggers the callback after the specified time.", () => {
    const time = 1000;

    const ref = React.createRef<HTMLDivElement>();
    const callback = jest.fn();

    const wrapper = ({ children }: { children: React.ReactNode }) => (
      <div ref={ref}>{children}</div>
    );

    renderHook(() => useLongPress(ref, time, callback), {
      wrapper,
    });

    const node = ref.current as HTMLDivElement;

    fireEvent.touchStart(node);

    expect(callback).toHaveBeenCalledTimes(0);

    act(() => {
      jest.advanceTimersByTime(time + 1);
    });

    expect(callback).toHaveBeenCalledTimes(1);
  });
});
