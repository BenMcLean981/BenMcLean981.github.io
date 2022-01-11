import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import { useMediaQuery } from "./useMediaQuery";

export function useDarkMode() {
  const systemDark = useMediaQuery("query") ? "true" : "false";
  const [darkMode] = useLocalStorage("darkMode", systemDark);

  useEffect(() => {
    if (darkMode === "true") document.documentElement.classList.add("dark");
    else if (darkMode === "false")
      document.documentElement.classList.remove("dark");
  }, [darkMode]);
}
