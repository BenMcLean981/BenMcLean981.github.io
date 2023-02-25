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
        timeout.current = setTimeout(callback, time / 1000);
      };

      const handleRelease = () => {
        if (timeout.current != null) {
          clearTimeout(timeout.current);
        }
      };

      node?.addEventListener("onMouseDown", handleTouch);
      node?.addEventListener("onTouchDown", handleTouch);
      node?.addEventListener("onMouseUp", handleRelease);
      node?.addEventListener("onTouchUp", handleRelease);
      node?.addEventListener("onMouseLeave", handleRelease);

      return () => {
        node?.removeEventListener("onMouseDown", handleTouch);
        node?.removeEventListener("onTouchDown", handleTouch);
        node?.removeEventListener("onMouseUp", handleRelease);
        node?.removeEventListener("onTouchUp", handleRelease);
        node?.removeEventListener("onMouseLeave", handleRelease);
      };
    }
  });
}
