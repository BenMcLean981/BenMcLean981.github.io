import { useEffect, useState } from "react";

export function useLocalStorage(
  key: string,
  defaultValue: string
): [string, (value: string) => void] {
  function getLocalStorage(key: string, defaultValue: string): string {
    const item = window.localStorage.getItem(key);

    if (item) return item;
    else {
      window.localStorage.setItem(key, defaultValue);
      return defaultValue;
    }
  }

  const [value, setValue] = useState(() => getLocalStorage(key, defaultValue));

  useEffect(() => {
    setInterval(() => setValue(getLocalStorage(key, defaultValue)), 10);
    /**
     * I'm sceptical of the performance impact of this.
     * Profiling revealed that there is a negligable impact (except for when changing)
     */
  });

  useEffect(() => {
    window.localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
