# Ben McLean

Hi, my name is Ben McLean and this is the source code for my [portfolio website](http://BenMcLean981.github.io)!

I'm a software developer at Lincoln Electric. I graduated from the University of Ottawa in May 2023 with a B.A.Sc in Mechanical Engineering and a B.Sc in Computing Technology.

The purpose of this project is to both tell and show some of my capabilities. You can read about me on my website, play a game I wrote, and then read the source code to judge the quality of the work I've done.

## Tech Stack

I chose what I believed to be safe technolgoies to use in this project. I wanted to choose technologies that I believed would give me a good starting point for the job market.

### Frontend (React)

I chose React for the frontend, and I have some experience with it in the past. I think component oriented front-end design is a good idea, and would be just as comfortable choosing Vue, svelte or any other front-end framework. I have done some work with pure javascript on a past project which was template rendered, but that does not scale well to a dynamic site.

### Backend (None!)

I host my frontend as static files on Github Pages. As such, no back-end is needed. However, I am brainstorming a project which would require a backend.

### Testing (@Testing-library)

I have never tested React before, and I believed this would be a good oportunity to do so. I am using the testing library that ships with Create React App (CRA) and will be aiming to learn how to make good React tests. I have set a coverage target of 80%, though internally I try to write good maintainable tests for 100% coverage.

### CSS (Tailwind CSS)

I've worked with Bootstrap in the past, I've written my own CSS, and now I've chosen to try Tailwind. I've heard a lot of good things about it, and am looking forward to using it's utility classes here.

### Deployment (Github Actions)

I have made (mostly copied from a blog) a Github Actions CI/CD pipeline that will build, test, and deploy the site to Github pages on any change to the master branch. You can take a look at the `node.js.yml` in the `/.github/workflows` folder.

### Project Structure (Next inspired)

I've worked with Next in the past and appreciated the fine split between pages and components, I've done the same here. I have three main folders in src (pages, components, hooks) Tests will be bundled with their respective modules. For example ./src/components/utils has a **tests** subfolder which contails tests for everything in ./src/components/utils folder.

### Running Dev Environment

If you want to take a look at my source code, I would recommend cloning this repo and running the development server as follows.

```
git clone https://github.com/BenMcLean981/ben-mclean-portfolio.git

cd ben-mclean-portfolio
yarn
yarn start
```
