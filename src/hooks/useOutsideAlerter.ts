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
    function handleClickOutside(event: TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("touchstart", handleClickOutside);
    return () => {
      document.removeEventListener("touchstart", handleClickOutside);
    };
  });
}
