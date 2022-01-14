import { Layout } from "../components/layout";
import React from "react";

export function FluidSimulation() {
  return (
    <Layout>
      <h1 className="text-6xl font-medium mb-2">Fluid Simulation</h1>
      <p className="text-xl font-medium">
        I've been fascinated with the idea of building a fluid simulator for
        quite some time now. My plan is to build it in Typescript, and redner it
        as a canvas in React.
        <br />
        Because this is going to be a large project, I'm going to be making a
        sort of blog to go along with it.
      </p>
      <hr className="my-4" />
      <h2 className="text-4xl font medium mb-2">Conservation Laws</h2>
    </Layout>
  );
}
