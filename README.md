![image](https://user-images.githubusercontent.com/10649124/119934337-493e1a00-bf8e-11eb-9f8e-539cfc3fd719.png)

# http://edwingichuhi.com/
# Developed using GatsbyJS
# Gatsby is an open-source static website generator (SSG) that is based on the frontend development framework React and makes use of Webpack and GraphQL technology.

Quick Start
Create a Gatsby site
Use the Gatsby CLI to create a new site, specifying the Lumen starter.

# Create a new Gatsby site using the Lumen starter
gatsby new blog https://github.com/alxshelepenok/gatsby-starter-lumen
Start Developing
Navigate into your new site’s directory and start it up.

cd blog
gatsby develop
Open the source code and start editing!
Your site is now running at http://localhost:8000!

Note: You'll also see a second link: http://localhost:8000/___graphql. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the Gatsby tutorial.

Open the blog directory in your code editor of choice and edit src/templates/index-template.js. Save your changes and the browser will update in real time!

Deploy with Netlify
Netlify CMS can run in any frontend web environment, but the quickest way to try it out is by running it on a pre-configured starter site with Netlify. Use the button below to build and deploy your own copy of the repository:

Deploy to Netlify

After clicking that button, you’ll authenticate with GitHub and choose a repository name. Netlify will then automatically create a repository in your GitHub account with a copy of the files from the template. Next, it will build and deploy the new site on Netlify, bringing you to the site dashboard when the build is complete. Next, you’ll need to set up Netlify’s Identity service to authorize users to log in to the CMS.

Deploy to Github Pages
To deploy to github pages, simply do the following:

Ensure that your package.json file correctly reflects where this repo lives
Change the pathPrefix in your config.js
Run the standard deploy command
npm run deploy
Access Locally
$ git clone https://github.com/[GITHUB_USERNAME]/[REPO_NAME].git
$ cd [REPO_NAME]
$ yarn
$ npm run develop
To test the CMS locally, you'll need run a production build of the site:

$ npm run build
$ gatsby serve
