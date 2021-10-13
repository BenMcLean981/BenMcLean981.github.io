import { MutableRefObject, useEffect } from "react";

/**
 * Hook to call function when ref is clicked outside of
 *
 * @param ref - ref to check "insideness" of
 * @param callback - callback for when click is outside of ref
 */
export function useOutsideAlterter(
  ref: MutableRefObject<null | HTMLElement | SVGElement>,
  callback: VoidFunction
) {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
}
