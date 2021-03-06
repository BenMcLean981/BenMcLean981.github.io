import { Route, Routes } from "react-router";

import { FluidSimulation } from "../../pages/fluidSimulation";
import { HashRouter } from "react-router-dom";
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
        <Route path="/fluid-simulation" element={<FluidSimulation />} />
      </Routes>
    </HashRouter>
  );
}
