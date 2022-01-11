import { DarkModeProvider } from "./components/utils/darkMode/darkModeContext";
import Nav from "./components/nav/nav";

export function App() {
  return (
    <div className="">
      <DarkModeProvider>
        <Nav />
      </DarkModeProvider>
    </div>
  );
}
