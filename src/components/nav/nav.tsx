import { MyRouter } from "./myRouter";
import React from "react";
import { NavBar } from "./navBar";

export function Nav() {
  return (
    <MyRouter>
      <NavBar />
    </MyRouter>
  );
}
