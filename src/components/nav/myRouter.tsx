import { Route, Switch } from "react-router";

import { BrowserRouter } from "react-router-dom";
import { Home } from "../../pages/home";
import { PropsWithChildren } from "react";

export function MyRouter(props: PropsWithChildren<{}>) {
  return (
    <BrowserRouter>
      {props.children}
      <Switch>
        <Route path="/resume">Resume</Route>
        <Route path="/minesweeper">Minesweeper</Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
