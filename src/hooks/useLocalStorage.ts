import React, { useEffect, useState } from "react";

export function useLocalStorage(
  key: string,
  defaultValue: string
): [string, React.Dispatch<React.SetStateAction<string>>] {
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
    window.localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
}
