import { MyRouter } from "./myRouter";
import React from "react";
import { NavBar } from "./navBar";

export default function Nav() {
  return (
    <MyRouter>
      <NavBar />
    </MyRouter>
  );
}
