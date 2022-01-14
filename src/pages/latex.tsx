import { UL, ULI } from "../components/utils/unorderedList";

import { H1 } from "../components/utils/headings";
import { Layout } from "../components/layout";
import { P } from "../components/utils/paragraph";

export function LatexPage() {
  return (
    <Layout>
      <H1>LaTeX</H1>
      <P>
        I would like a very simple LaTeX equation renderer for fluid simulation
        blog. Basically, I want a little React Component that can render the
        following:
        <UL>
          <ULI>Symbols (including greek letters)</ULI>
          <ULI>Operators (+ - / *)</ULI>
          <ULI>Brackets (multiple levels)</ULI>
          <ULI>Exponents (multiple levels)</ULI>
          <ULI>Fractions (multiple levels)</ULI>
          <ULI>Other relevant math notation</ULI>
        </UL>
        I would also like it to be reasonable secure against bad input. Kind of
        like how the browser will render poorly written HTML and not throw an
        error. LaTeX is really just markup and so it's important that it is
        treated as such.
        <br />
        <br />
        This is probably going to be a bit tricky. I'm writing this at the
        beginning of the project and I'm not sure how I will achieve some of the
        exponent, bracket and fraction nesting.
      </P>
    </Layout>
  );
}
