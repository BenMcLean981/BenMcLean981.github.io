import { Route, Routes } from "react-router";

import { BrowserRouter } from "react-router-dom";
import { Home } from "../../pages/home";

export function MyRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/resume">Resume</Route>
        <Route path="/minesweeper">Minesweeper</Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
