import { H1, H2 } from "../components/utils/headings";
import { OL, OLI } from "../components/utils/orderedList";
import { UL, ULI } from "../components/utils/unorderedList";

import { A } from "../components/utils/link";
import { Divider } from "../components/utils/divider";
import { Layout } from "../components/layout";
import { P } from "../components/utils/paragraph";

export function Home() {
  return (
    <Layout>
      <div className="flex justify-between gap-8">
        <div>
          <H1>All About Me</H1>
          <P>
            My name is Ben McLean, I am 22 years old and am in my final year of
            University. I am in a double degree program at uOttawa, I am
            obtaining a B.Sc in Computing Technology and a B.A.Sc in Mechanical
            Engineering. I am on track to graduate in April 2022. I love what I
            do and am passionate about software and engineering, and I hope to
            be able to use my skills to make a positive impact on the world.
          </P>
          <Divider />

          <H1>My Portfolio</H1>
          <P>
            Before graduating, I decided it would be a good plan to make a
            portfolio of some open source projects I would like to work on.
            These projects were meant to be:
          </P>
          <UL>
            <ULI>Complete</ULI>
            <ULI>Interesting</ULI>
            <ULI>Relevant to Software Engineering</ULI>
          </UL>
          <P>
            I realized that a good way to showcase these projects would be with
            a nice Website, which itself would be an open source project. Thus,
            my portfolio was born! So far it is just a static site being hosted
            on Github pages, but I have written it in React, implemented a CI/CD
            pipeline with automated tests, and put a small project on the
            website. I have plans to expand it and add more projects to it. I
            want the projects to be simple enough that a reader can figure out
            what they do in a few minutes, but unique and complicated enough
            that they show diversity and depth of skill.
          </P>
        </div>
        <img
          className="w-3/12 object-contain"
          src={process.env.PUBLIC_URL + "/images/ben-mclean.png"}
          alt="Ben McLean"
        />
      </div>
      <Divider />

      <H1>My Passions</H1>
      <P>
        I believe that in today's world we are tasked with some of the most
        difficult problems of any generation, and I think STEM majors such as
        myself are uniquely equipped to deal with these problems. I believe that
        I can make a positive impact in the world with my talent and with good
        software, and I am most interested in working in the following fields
        and solving the following problems:
      </P>
      <UL>
        <ULI>Climate Change</ULI>
        <ULI>Space Exploration</ULI>
        <ULI>Access to Education</ULI>
        <ULI>Sustainability</ULI>
        <ULI>Robotics and Automation</ULI>
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
              This Website, the goal is to create a nice, responsive website
              with interesting projects. I think that responsiveness, and
              snappiness are very important, and that is what I've optimized
              for. This website is open sourced and deployed to GitHub Pages. It
              is written in React, tested with Jest and React-Testing-Library.
              You can view and clone the repository{" "}
              <A
                href="https://github.com/BenMcLean981/BenMcLean981.github.io"
                target="_blank"
                rel="noreferrer"
              >
                here!
              </A>
            </ULI>
            <ULI>
              <A
                href="https://ottawaavgroup.square.site/"
                target="_blank"
                rel="noreferrer"
              >
                OAVG's Autonomous Snowplow
              </A>{" "}
              (shown here). I did a lot of the manufacturing and assembly work.
              I also helped to document the electrical and mechanical design of
              the robot.
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
              removing barrels of waste at depths up to 3000m. We were required
              to do all the necessary design, analysis, and reporting work.
            </ULI>
            <ULI>
              My co-op project: Because of confidentiality issues, I'm unable to
              disclose the full details of the project, but I've been working on
              an ERP system for a machine my employer sells to fabricators. I
              have a React app, a library that handles a lot of the mathematical
              computation, a kubernetes cluster on Azure cloud for storage. And
              a Javascript backend application for CRUD operations. I also
              maintain a Flask application that uses SQLAlchemy on an SQLite
              database to render templates for displaying reports.
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
            I think it's important for recruiters and hiring managers to see
            what technologies I am comfortable with. I'd be interested in
            learning anything, but these are the technologies I currently feel
            competent with in order from most to least (more or less).
          </P>
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-4 grid-cols-1">
            <div>
              <H2>Languages</H2>
              <OL>
                <OLI>Typescript (Javascript)</OLI>
                <OLI>Python</OLI>
                <OLI>Java</OLI>
                <OLI>C++</OLI>
              </OL>
            </div>
            <div>
              <H2>Libraries and Frameworks</H2>
              <OL>
                <OLI>NextJS (React)</OLI>
                <OLI>Flask</OLI>
                <OLI>SQLAlchemy</OLI>
                <OLI>Express</OLI>
              </OL>
            </div>
            <div>
              <H2>Tools</H2>
              <OL>
                <OLI>VSCode</OLI>
                <OLI>Git</OLI>
                <OLI>Kubernetes and Docker</OLI>
                <OLI>Azure (Cloud and Devops)</OLI>
              </OL>
            </div>
            <div>
              <H2>Other</H2>
              <OL>
                <OLI>Automated Testing (Jest)</OLI>
                <OLI>GitHub</OLI>
                <OLI>REST</OLI>
                <OLI>SQL (MySQL and PostgreSQL)</OLI>
              </OL>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
