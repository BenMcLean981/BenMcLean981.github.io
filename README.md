# Ben McLean

Hi, my name is Ben McLean and this is the source code for my [portfolio website](http://BenMcLean981.github.io)!

I'm a 4th year student at the University of Ottawa enrolled in a double degree program of Mechanical Engineering and Computing Technology. I hope to acquire a job as a software engineer/developer after graduation.

The purpose of this project is to both tell and show some of my capabilities. You can read about me on my website, play games I wrote, and then read the source code to judge the quality of the work I've done.

## Tech Stack

I chose what I believed to be safe technolgoies to use in this project. I wanted to choose technologies that I believed would give me a good starting point for the job market.

### Frontend (React)

I chose React for the frontend, and I have some experience with it in the past. I think component oriented front-end design is a good idea, and would be just as comfortable choosing Vue, svelte or any other front-end framework. I have done some work with pure javascript on a past project which was template rendered, but that does not scale well to a dynamic site.

### Backend (None!)

I host my frontend as static files on Github Pages. As such, no back-end is needed. However, I am brainstorming a project which would require a backend.

### Testing (React)

I have never tested React before, and I believed this would be a good oportunity to do so. I am using the testing library with Create React App (CRA) and will be aiming to learn how to make good React tests, not necessarily just get high coverage.

### CSS (Tailwind CSS)

I've worked with Bootstrap in the past, I've written my own CSS, and now I've chosen to try Tailwind. I've heard a lot of good things about it, and am looking forward to using it's utility classes here.

### Deployment (Github Actions)

I have made (mostly copied from a blog) a Github Actions CI/CD pipeline that will build, test, and deploy the site to Github pages on any change to the master branch. You can take a look at the `node.js.yml` in the `/.github/workflows` folder.

### Project Structure (Next inspired)

I've worked with Next in the past and appreciated the fine split between pages and components, I've done the same here. Tests will be bundled directly next to components/pages/hooks instead of being placed in their on `__tests__` folder. The reason for this is I dont think building 2 seperate file trees in parallel is sustainable, I've done that in the past and found it difficult.

### Running Dev Environment

If you want to take a look at my source code, I would recommend cloning this repo and running the development server as follows.

```
git clone https://github.com/BenMcLean981/ben-mclean-portfolio.git

cd ben-mclean-portfolio
yarn
yarn start
```
