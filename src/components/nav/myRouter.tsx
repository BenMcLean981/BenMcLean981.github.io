import { Route, Routes } from "react-router";

import { HashRouter } from "react-router-dom";
import { AdventOfCode } from "../../pages/adventOfCode";
import { Home } from "../../pages/home";
import { Minesweeper } from "../../pages/minesweeper";

export function MyRouter() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/minesweeper" element={<Minesweeper />}>
          Minesweeper
        </Route>
        <Route path="/advent-of-code" element={<AdventOfCode />}>
          Advent Of Code
        </Route>
      </Routes>
    </HashRouter>
  );
}
