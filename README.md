# PersonalWebsite

## Features
- Progressive Web App (PWA)
- Pagination support
- Archive organized by tags and categories
- Syntax highlighting in code blocks using [PrismJS](http://prismjs.com)
- Continuous integration and continuous development (CI/CD)
- Static code analysis
- Lighthouse analysis to track perfomance, accessibility, and best practice metrics
- Google Analytics
- Dark mode
- RSS feed

## Getting Started
This repo uses npm, so to download and install the projects dependencies simply run `npm install` and 
`npm install --include=dev`. Now to start the project locally, run `npm run develop`. This will build the web app and 
serve it at http://localhost:8000/. Any changes to the code now will trigger a hot reload, and your changes will be 
reflected in the browser.

You will also notice a second link in the npm output: http://localhost:8000/___graphql. This is a tool you can use to experiment 
with querying your data. Learn more about using this tool in this [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).

## CI/CD
Automatic jobs run in GitLab CI on most commits (as long a branch was properly named!). With feature branch changes, 
the project will be:
1) Built, to ensure the project compiles
2) Linted, to ensure consistency 
3) Run Lighthouse analysis, to track performance, accessibility, and best practices

For inflight branch changes, the project will run all the feature branch jobs, as well as:
1) Deploy to the staging environment

For master branch changes, the project will run all the feature branch jobs, as well as:
1) Deploy to the production environment

### Running GitLab Jobs Locally
While it is not required, you can duplicate this pipeline locally. First you must install [gitlab-runner](https://docs.gitlab.com/runner/install/)
per your OS. Then start the gitlab runner with `gitlab-runner start`. Finally, choose the GitLab CI job you want to 
test and run something like `gitlab-runner exec docker test:lighthouse`. Be aware the runner only runs with your latest 
committed code, which makes for an odd workflow.

## Deploy
The following instructions are to set up deploying manually, and they largely reflect the same actions the GitLab jobs 
take. These commands assumed you have built the project and it is accessible in the `public/` folder. Also note there 
are two environments, so choose the commands needed for the environment you wish to deploy too.

First, set your environment variables. An example file is located at `.env_example`, copy that to a file named `.env` 
and fill out the variables. The `.env` is ignored in Git, so don't worry about your secrets being committed. Now source 
that file to make them available to your shell:
```
source .env
```

Next, copy the files to S3:
```
aws s3 sync public s3://${STAGING_BUCKET_NAME} --delete
# or
aws s3 sync public s3://${PROD_BUCKET_NAME} --delete
```

Lastly, invalidate the cloudfront cache:
```
aws cloudfront create-invalidation --distribution-id ${STAGING_DISTRIBUTION_ID} --paths "/*"
# or
aws cloudfront create-invalidation --distribution-id ${PROD_DISTRIBUTION_ID} --paths "/*"
```

#TODO:
- https://search.google.com/search-console/about
- Implement Dark Mode
- robots.txt
- error page (+s3)
- remove redundant post metadata

## Credits
Built and owned by myself, Jonathan Beckman. All artwork and photographs, unless expressed otherwise, are owned by me. 
Usage of images on this site is prohibited unless given consent. All inquiries should be sent to hello@jonbeckman.com.
