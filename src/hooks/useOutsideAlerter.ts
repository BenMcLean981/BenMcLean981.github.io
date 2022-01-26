import { MutableRefObject, useEffect } from "react";

/**
 * Hook to call function when ref is clicked outside of
 *
 * @param ref - ref to check "insideness" of
 * @param callback - callback for when click is outside of ref
 */
export function useOutsideAlerter(
  ref: MutableRefObject<null | HTMLElement | SVGElement>,
  callback: VoidFunction
) {
  useEffect(() => {
    function alertOutside(e: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", alertOutside);
    document.addEventListener("touchstart", alertOutside);
    return () => {
      document.removeEventListener("mousedown", alertOutside);
      document.removeEventListener("touchstart", alertOutside);
    };
  }, [ref, callback]);
}
