import { Layout } from "../components/layout";
import { H1 } from "../components/utils/headings";
import { Anchor } from "../components/utils/anchor";
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
        Last year I attempted it, but it was during exam season so I only got a
        few days in. This year I made it 15 days in, which is actually in the{" "}
        <Anchor newWindow href="https://adventofcode.com/2022/stats">
          85th percentile
        </Anchor>{" "}
        as the days get progressively more difficult.
      </P>
      <br />
      <P>
        This year I decided I wanted to learn the Rust programming language. So
        I did Advent of Code in Rust (which probably didn't help my chances of
        completing the challenge). I didn't write tests because of how new Rust
        was to me, but regardless I've decided to include my solution to Advent
        of Code 2022{" "}
        <Anchor
          newWindow
          href="https://github.com/BenMcLean981/advent-of-code-2022"
        >
          here
        </Anchor>
        . Just know that this isn't indicative of how I write code in
        environments I am comfortable in. But I hope it shows how I approach
        complex competitive programming challenges.
      </P>
    </Layout>
  );
}
