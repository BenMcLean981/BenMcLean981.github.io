import React, { useEffect, useState } from "react";

export function useLocalStorage(
  key: string,
  defaultValue?: string
): [string | null, React.Dispatch<React.SetStateAction<string | null>>] {
  function getLocalStorage(key: string, defaultValue?: string): string | null {
    const item = window.localStorage.getItem(key);

    if (item) return item;
    else if (defaultValue !== undefined) return defaultValue;
    else return null;
  }

  const [value, setValue] = useState(getLocalStorage(key, defaultValue));

  useEffect(() => {
    if (value === null) window.localStorage.removeItem(key);
    else window.localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
