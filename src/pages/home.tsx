import { Layout } from "../components/layout";
import React from "react";

export function Home() {
  return (
    <Layout>
      <div className="container mx-auto pt-2 dark:text-white">
        <div className="flex justify-between gap-8">
          <div>
            <h1 className="text-6xl font-medium mb-2">All About Me</h1>
            <p className="text-xl font-medium">
              My name is Ben McLean, I am 22 years old and am in my final year
              of University. I am in a double degree program at uOttawa, I am
              obtaining a B.Sc in Computing Technology and a B.A.Sc in
              Mechanical Engineering. I am on track to graduate in May 2021. I
              love what I do and am passionate about software engineering, and I
              hope to be able to use my skills to make a positive impact on the
              world.
            </p>
            <hr className="my-4" />

            <h1 className="text-6xl font-medium  mb-2">My Portfolio</h1>
            <p className="text-xl font-medium">
              Before graduating, I decided it would be a good plan to make a
              portfolio of some open source projects I would like to work on.
              These projects were meant to be:
              <ul className="ml-6 list-disc">
                <li>Complete</li>
                <li>Interesting</li>
                <li>Relevant to Software Engineering</li>
              </ul>
              I realized that a good way to showcase these projects would be
              with a nice Website, which itself would be an open source project.
              Thus, my portfolio was born! So far it is just a static site being
              hosted on Github pages, but I have written it in React,
              implemented a CI/CD pipeline with automated tests, and put a few
              small projects on the website.
            </p>
          </div>
          <img
            className="w-3/12 object-contain"
            src={process.env.PUBLIC_URL + "/images/ben-mclean.png"}
            alt="Ben McLean"
          />
        </div>
        <hr className="my-4" />

        <h1 className="text-6xl font-medium  mb-2">My Passions</h1>
        <p className="text-xl font-medium">
          I believe that in today's world we are tasked with some of the most
          difficult problems of any generation, and I think STEM majors such as
          myself are uniquely equiped to deal with these problems. I belive that
          I can make a positive impact in the world with my talent and with good
          software, and I am most interested in working in the following fields
          and solving the following problems:
          <ul className="ml-6 list-disc">
            <li>Climate Change</li>
            <li>Space Exploration</li>
            <li>Access to Education</li>
            <li>Sustainability</li>
            <li>Robots and Automation</li>
          </ul>
        </p>
        <hr className="my-4" />
        <div className="flex justify-between gap-8">
          <div>
            <h1 className="text-6xl font-medium  mb-2">My Projects</h1>
            <p className="text-xl font-medium">
              I have a few projects I'm working on right now, some of them are:
              <ul className="ml-6 list-disc">
                <li>
                  This Website, I don't think I am particularly good at
                  front-end work, but I am working on it! I think this website
                  is a good opportunity for me to improve. I think that
                  responsiveness, and snappiness are very important, and that is
                  what I've optimized for.
                </li>
                <li>
                  OAVG's Autonomous Snowplow (shown here). I did a lot of the
                  manufacturing and assembly work. I also helped to document the
                  electrical and mechanical design of the robot.
                </li>
              </ul>
              <br />I have a few other past projects I've worked on which I'm
              proud of enough to mention here:
              <ul className="ml-6 list-disc">
                <li>
                  My capstone project: we were tasked with designing a deepwater
                  decontamination device. The device was designed to capable of
                  removing barrels of waste at depths up to 3000m. We were
                  required to do all the necessary design, analysis, and
                  reporting work.
                </li>
                <li>
                  My co-op project: I can't get into too much detail, but I've
                  been working on a sort of ERP system for a machine my employer
                  sells to fabricators. I have a React app, a library that
                  handles a lot of the mathematical computation, and a
                  kubernetes cluster in the cloud that handles storage.
                </li>
              </ul>
            </p>
          </div>
          <img
            className="w-6/12 object-contain"
            src={process.env.PUBLIC_URL + "/images/snowplow.png"}
            alt="autonomous snowplow"
          />
        </div>
        <hr className="my-4" />
        <div>
          <h1 className="text-6xl font-medium  mb-2">Technologies</h1>
          <div>
            <p className="text-xl font-medium">
              I think it's important for recruiters and hiring managers to see
              what technologies I am comfortable with. I'd be interested in
              learning anything, but these are the technologies I currently feel
              competent with in order from most to least (more or less).
            </p>
            <div className="grid grid-cols-4 gap-4">
              <div>
                <h2 className="text-3xl font-medium">Languages</h2>
                <ol className="list-decimal ml-6">
                  <li className="text-xl font-medium">
                    Typescript (Javascript)
                  </li>
                  <li className="text-xl font-medium">Python</li>
                  <li className="text-xl font-medium">Java</li>
                  <li className="text-xl font-medium">C++</li>
                </ol>
              </div>

              <div>
                <h2 className="text-3xl font-medium">
                  Libraries and Frameworks
                </h2>
                <ol className="list-decimal ml-6">
                  <li className="text-xl font-medium">NextJS (React)</li>
                  <li className="text-xl font-medium">Flask</li>
                  <li className="text-xl font-medium">SQLAlchemy</li>
                  <li className="text-xl font-medium">Express</li>
                </ol>
              </div>
              <div>
                <h2 className="text-3xl font-medium">Tools</h2>
                <ol className="list-decimal ml-6">
                  <li className="text-xl font-medium">VSCode</li>
                  <li className="text-xl font-medium">Git</li>
                  <li className="text-xl font-medium">Kubernetes and Docker</li>
                  <li className="text-xl font-medium">
                    Azure (Cloud and Devops)
                  </li>
                </ol>
              </div>
              <div>
                <h2 className="text-3xl font-medium">Other</h2>
                <ol className="list-decimal ml-6">
                  <li className="text-xl font-medium">
                    Automated Testing (Jest)
                  </li>
                  <li className="text-xl font-medium">GitHub</li>
                  <li className="text-xl font-medium">REST</li>
                  <li className="text-xl font-medium">
                    SQL (MySQL and PostgreSQL)
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
