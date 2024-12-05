import { H1, H6 } from "../components/utils/headings";

import { Anchor } from "../components/utils/anchor";
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
        I like to do it in Rust, as it is a nice challenge for me and a good
        excuse to learn new technologies. The challenges get progressively more
        difficult, this past year I got 40/50 stars (which actually is more than
        90% of participants).
      </P>
      <br />
      <H6>Years</H6>
      <li>
        <Anchor
          href="https://github.com/BenMcLean981/advent-of-code-2024"
          newWindow
        >
          2024
        </Anchor>
      </li>
      <li>
        <Anchor
          href="https://github.com/BenMcLean981/advent_of_code_2023"
          newWindow
        >
          2023
        </Anchor>
      </li>
      <li>
        <strong>2022: </strong> Due to an unfortunate accident I lost my 2022
        solution. This was also done in Rust.
      </li>
      <li>
        <Anchor
          href="https://github.com/BenMcLean981/advent-of-code-2021"
          newWindow
        >
          2021
        </Anchor>
      </li>
    </Layout>
  );
}
