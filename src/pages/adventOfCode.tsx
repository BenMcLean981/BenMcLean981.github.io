import { Anchor } from "../components/utils/anchor";
import { H1 } from "../components/utils/headings";
import { Layout } from "../components/layout";
import { P } from "../components/utils/paragraph";

export function AdventOfCode() {
  return (
    <Layout>
      <H1>Advent Of Code</H1>
      <P>
        Each year around the holidays a coding challenge is posted{" "}
        <Anchor href="https://adventofcode.com/" newWindow>
          online
        </Anchor>
        . It always gets a lot of attention on Twitter, Reddit, and Hackernews.
        Last year I did Advent of Code in Rust and made it into the top 85% (day 15).
        Due to an unfortunate accident I have lost this Rust code.
      </P>
      <br />
      <P>
        I will be tracking my progress for 2023 <Anchor newWindow href="https://github.com/BenMcLean981/advent-of-code-2023">here</Anchor>.
      </P>
    </Layout>
  );
}
