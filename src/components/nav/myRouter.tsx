import { Route, Routes } from "react-router";

import { HashRouter } from "react-router-dom";
import { Home } from "../../pages/home";
import { Minesweeper } from "../../pages/minesweeper";

export function MyRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/resume">Resume</Route>
        <Route path="/minesweeper" element={<Minesweeper />}>
          Minesweeper
        </Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </HashRouter>
  );
}
