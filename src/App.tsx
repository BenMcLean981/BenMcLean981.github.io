import { DarkModeProvider } from "./components/contexts/darkMode/darkModeProvider";
import { MyRouter } from "./components/nav/myRouter";

export function App() {
  return (
    <div className="">
      <DarkModeProvider>
        <MyRouter />
      </DarkModeProvider>
    </div>
  );
}
