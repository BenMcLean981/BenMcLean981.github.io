import { useEffect, useState } from "react";

export interface Timer {
  seconds: number;
  isEnabled: boolean;
  reset: VoidFunction;
  disable: VoidFunction;
  enable: VoidFunction;
  format: () => string;
}

export function useTimer(): Timer {
  const [enabled, setEnabled] = useState(false);
  const [seconds, setSeconds] = useState(0);

  function reset() {
    setSeconds(0);
    setEnabled(false);
  }

  function enable() {
    setEnabled(true);
  }

  function disable() {
    setEnabled(false);
  }

  function format(): string {
    const minutes = Math.floor(seconds / 60);
    const remSecs = seconds % 60;

    if (minutes === 0) return remSecs.toFixed(1);
    return `${minutes}:${remSecs.toFixed(1).padStart(4, "0")}`; //4 = tens, ones, dec, tenths
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (enabled) setSeconds((s) => s + 0.1);
    }, 100);

    return () => clearInterval(interval);
  }, [enabled, setSeconds]);

  return {
    seconds,
    isEnabled: enabled,
    reset,
    enable,
    disable,
    format,
  };
}
