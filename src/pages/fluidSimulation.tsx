import { H1, H2, H3 } from "../components/utils/headings";

import { Divider } from "../components/utils/divider";
import { Layout } from "../components/layout";
import { P } from "../components/utils/paragraph";

export function FluidSimulation() {
  return (
    <Layout>
      <H1>Fluid Simulation</H1>
      <P>
        I've been fascinated with the idea of building a fluid simulator for
        quite some time now. My plan is to build it in Typescript, and render it
        as a canvas in React.
        <br />
        Because this is going to be a large project, I'm going to be making a
        sort of blog to go along with it.
      </P>
      <Divider />
      <H3>Side-Note: LaTeX Component</H3>
      <P>
        I'd like to be able to render LaTeX equations for this little blog I'm
        planning. To do this, I'm going to make a LaTeX component which will be
        a mini-project in and of itself.
      </P>
      <Divider />
      <H2>Conservation Laws</H2>
    </Layout>
  );
}
