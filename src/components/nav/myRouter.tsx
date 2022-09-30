import { Route, Routes } from "react-router";

import { BrowserRouter } from "react-router-dom";
import { Home } from "../../pages/home";
import { PropsWithChildren } from "react";

export function MyRouter(props: PropsWithChildren<{}>) {
  return (
    <BrowserRouter>
      {props.children}
      <Routes>
        <Route path="/resume">Resume</Route>
        <Route path="/minesweeper">Minesweeper</Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}
