import Nav from "./components/nav/nav";
import { useDarkMode } from "./hooks/useDarkMode";

export function App() {
  useDarkMode();

  return (
    <div className="">
      <Nav />
    </div>
  );
}
