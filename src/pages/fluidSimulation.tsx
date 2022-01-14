import { H1, H2 } from "../components/utils/headings";

import { Divider } from "../components/utils/divider";
import { Layout } from "../components/layout";
import { P } from "../components/utils/paragraph";

export function FluidSimulation() {
  return (
    <Layout>
      <H1>Fluid Simulation</H1>
      <P>
        I've been fascinated with the idea of building a fluid simulator for
        quite some time now. My plan is to build it in Typescript, and redner it
        as a canvas in React.
        <br />
        Because this is going to be a large project, I'm going to be making a
        sort of blog to go along with it.
      </P>
      <Divider />
      <H2>Conservation Laws</H2>
    </Layout>
  );
}
