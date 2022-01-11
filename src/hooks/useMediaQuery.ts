import { useEffect, useState } from "react";

export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(
    window.matchMedia(query).matches !== null
  );

  useEffect(() => {
    function updateMatches() {
      const media = window.matchMedia(query);
      if (media.matches !== matches) setMatches(media.matches);
    }

    updateMatches();

    window.addEventListener("resize", updateMatches);

    return () => window.removeEventListener("resize", updateMatches);
  }, [query, matches]);

  return matches;
}
