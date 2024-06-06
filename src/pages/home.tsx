import { H1, H2 } from "../components/utils/headings";
import { OL, OLI } from "../components/utils/orderedList";
import { UL, ULI } from "../components/utils/unorderedList";

import { Anchor } from "../components/utils/anchor";
import { Divider } from "../components/utils/divider";
import { Layout } from "../components/layout";
import { P } from "../components/utils/paragraph";

function getAgeInYears() {
  const DATE_OF_BIRTH = new Date(1999, 2, 19);
  const today = new Date();
  const milliseconds = today.getTime() - DATE_OF_BIRTH.getTime();
  const years = milliseconds / 1000 / 3600 / 24 / 365.24225;

  return Math.floor(years);
}

export function Home() {
  return (
    <Layout>
      <div className="flex flex-col gap-2">
        <p className="text-center text-md font-medium dark:text-white italic">
          The views expressed on this website are mine alone and do not
          necessarily reflect the views of my employer.
        </p>
        <hr className="my-2" />
        <H1>All About Me</H1>
        <P>
          My name is Ben McLean, I am {getAgeInYears()} years old and am
          employed at Catalyst Technologies. Catalyst develops software to be
          used in the agricultural sector. I am currently working on a NextJS
          Application.
        </P>
        <P>
          My previous role was at Inovatech Engineering, a Lincoln Electric
          company. I helped maintain a large .NET/C# codebase, but also did some
          projects with TypeScript/React and Python.
        </P>
        <P>
          In June 2022 I graduated Cum Laude from the University of Ottawa. I
          completed a double degree in which I studied Mechanical Engineering
          and Computing Technology. I participated in the co-op program where I
          discovered that I greatly enjoy writing software. I am passionate
          about software and engineering, and I hope to be able to use my skills
          to make a positive impact on the world.
        </P>
        <Divider />

        <H1>My Portfolio</H1>
        <P>
          Before graduating, I decided it would be a good plan to make a
          portfolio of some open source projects that I would like to work on.
          These projects were meant to be:
        </P>
        <UL>
          <ULI>Complete and Robust</ULI>
          <ULI>Interesting</ULI>
          <ULI>Relevant to Software Engineering</ULI>
        </UL>
        <P>
          I realized that a good way to showcase these projects would be with a
          nice Website, which itself would be an open source project. Thus, my
          portfolio was born! So far it is just a static site being hosted on
          Github pages, I have written it in React, implemented a CI/CD pipeline
          with automated tests, and added a small game. I have plans to expand
          it and add more projects to it as I feel inspiration. I want the
          projects to be simple enough that a reader can figure out what they do
          in a few minutes, but unique and complex enough that they show
          diversity and depth of skill.
        </P>
        <Divider />

        <H1>My Passions</H1>
        <P>
          I believe that in today's world we are tasked with some of the most
          difficult problems of any generation, and I think STEM majors such as
          myself are uniquely equipped to deal with these problems. I believe
          that I can make a positive impact in the world with my talent and with
          good software, and I am most interested in working in the following
          fields and solving the following problems:
        </P>
        <UL>
          <ULI>Climate Change</ULI>
          <ULI>Space Exploration</ULI>
          <ULI>Sustainability</ULI>
          <ULI>Robotics and Automation</ULI>
          <ULI>Access to Education</ULI>
          <ULI>Code Quality</ULI>
        </UL>
        <Divider />
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div>
            <H1>My Projects</H1>
            <P>
              I have a few projects I'm working on right now, some of them are:
            </P>
            <UL>
              <ULI>
                This Website, whose source code you can clone{" "}
                <Anchor
                  href="https://github.com/BenMcLean981/BenMcLean981.github.io"
                  newWindow
                >
                  here!
                </Anchor>
              </ULI>
              <ULI>
                Several work projects which I am unable to discuss in more
                detail.
              </ULI>
            </UL>
            <Divider />
            <P>
              I have a few other past projects I've worked on which I'm proud of
              enough to mention here:
            </P>
            <UL>
              <ULI>
                My capstone project: we were tasked with designing a deep-water
                decontamination device. The device was designed to capable of
                removing barrels of waste at depths up to 3000m. We were
                required to do all the necessary design, analysis, and reporting
                work.
              </ULI>
              <ULI>
                My co-op project: Because of confidentiality issues, I'm unable
                to disclose the full details of the project. I worked on a React
                app, a computational geometry library written in TypeScript, and
                kubernetes cluster on Azure cloud. I also maintain a Flask
                application that uses SQLAlchemy on an SQLite database to render
                templates for displaying reports.
              </ULI>
              <ULI>
                <Anchor href="https://ottawaavgroup.square.site/" newWindow>
                  OAVG's Autonomous Snowplow
                </Anchor>{" "}
                (shown here). I mostly did some of the manufacturing and
                assembly work. I also helped to document the electrical and
                mechanical design of the robot. And I wrote some ROS code to
                simulate it when Covid-19 forced the competition online.
              </ULI>
            </UL>
          </div>
          <img
            className="lg:w-6/12 object-contain"
            src={process.env.PUBLIC_URL + "/images/snowplow.png"}
            alt="autonomous snowplow"
          />
        </div>
        <Divider />
        <div>
          <H1>Technologies</H1>
          <div>
            <P>
              I'd be interested in learning anything, but these are the
              technologies I currently feel competent with in. Languages have
              been ordered from most to least competent.
            </P>
            <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 grid-cols-1">
              <div>
                <H2>Languages</H2>
                <OL>
                  <OLI>Typescript (Javascript)</OLI>
                  <OLI>Python</OLI>
                  <OLI>C#</OLI>
                  <OLI>Java</OLI>
                  <OLI>Rust</OLI>
                  <OLI>C/C++</OLI>
                </OL>
              </div>
              <div>
                <H2>Libraries and Frameworks</H2>
                <UL>
                  <ULI>NextJS (React)</ULI>
                  <ULI>Tailwind CSS</ULI>
                  <ULI>Flask</ULI>
                  <ULI>SQLAlchemy</ULI>
                  <ULI>Express</ULI>
                </UL>
              </div>
              <div>
                <H2>Tools</H2>
                <UL>
                  <ULI>Git</ULI>
                  <ULI>VSCode</ULI>
                  <ULI>Visual Studio</ULI>
                  <ULI>IntelliJ IDEA</ULI>
                  <ULI>Kubernetes and Docker</ULI>
                  <ULI>Azure Devops (CI/CD)</ULI>
                  <ULI>Azure Cloud</ULI>
                </UL>
              </div>
              <div>
                <H2>Other</H2>
                <UL>
                  <ULI>Automated Testing (Jest)</ULI>
                  <ULI>GitHub</ULI>
                  <ULI>REST APIs</ULI>
                  <ULI>SQL (MySQL and PostgreSQL)</ULI>
                </UL>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
