import { useDarkMode } from "../contexts/darkMode/useDarkMode";

export function DarkModeSwitch() {
  const [darkMode, dispatchDarkMode] = useDarkMode();

  // show sun or moon icon
  const darkModeLabel = darkMode ? "🌙" : "☀️";

  return (
    <div className="flex items-center gap-x-2">
      <button
        className="w-10 h-5 flex items-center bg-gray-400 rounded-full p-1 cursor-pointer"
        onClick={() => dispatchDarkMode({ type: "TOGGLE" })}
      >
        <div
          onClick={(e) => e.preventDefault()}
          className={
            "bg-black h-4 w-4 rounded-full shadow-md transform duration-300 ease-in-out" +
            (darkMode ? " transform translate-x-4 bg-slate-900" : null)
          }
        />
      </button>
      <button onClick={() => dispatchDarkMode({ type: "TOGGLE" })}>
        <span>{darkModeLabel}</span>
      </button>
    </div>
  );
}
