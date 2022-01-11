import { DarkModeProvider } from "./components/contexts/darkMode/darkModeContext";
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
