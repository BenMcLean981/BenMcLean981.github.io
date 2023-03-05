import { MutableRefObject, useEffect, useRef } from "react";

export function useLongPress(
  ref: MutableRefObject<null | HTMLElement | SVGElement>,
  time: number,
  callback: VoidFunction
) {
  const timeout = useRef<NodeJS.Timeout | null>();

  useEffect(() => {
    if (ref !== null) {
      const node = ref.current;

      const handleTouch = () => {
        timeout.current = setTimeout(callback, time);
      };

      const handleRelease = () => {
        if (timeout.current != null) {
          clearTimeout(timeout.current);
        }
      };

      node?.addEventListener("onMouseDown", handleTouch);
      node?.addEventListener("onTouchStart", handleTouch);
      node?.addEventListener("onMouseUp", handleRelease);
      node?.addEventListener("onTouchEnd", handleRelease);
      node?.addEventListener("onTouchCancel", handleRelease);
      node?.addEventListener("onMouseLeave", handleRelease);

      return () => {
        node?.removeEventListener("onMouseDown", handleTouch);
        node?.removeEventListener("onTouchStart", handleTouch);
        node?.removeEventListener("onMouseUp", handleRelease);
        node?.removeEventListener("onTouchEnd", handleRelease);
        node?.removeEventListener("onTouchCancel", handleRelease);
        node?.removeEventListener("onMouseLeave", handleRelease);
      };
    }
  });
}
