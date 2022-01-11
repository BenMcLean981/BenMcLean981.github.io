import { useLocalStorage } from "../../hooks/useLocalStorage";
import { useMediaQuery } from "../../hooks/useMediaQuery";

export function DarkModeSwitch() {
  const systemDark = useMediaQuery("query") ? "true" : "false";
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", systemDark);
  const oppositeDarkMode = darkMode === "true" ? "false" : "true";

  return (
    <div className="flex justify-center">
      <label className="inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className=""
          checked={darkMode === "true"}
          onClick={() => setDarkMode(oppositeDarkMode)}
        />
      </label>
    </div>
  );
}
