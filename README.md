This repo is to test out a simple CI/CD pipeline for a React app using Github Actions, Docker, and Vercel

This pipeline will consist of the following 4 stages:
1. Develop → development branch  ✅
    - Use to create the new source code for each sprint
    - Docker is used to create the development environment that runs application on any machine 
    - New branches will be created from this branch for building new features and bug fixes 
    - Once all features/bug fixes are implemented, a pull request is submitted to merge into main branch 
2. Build → pull request into main branch 
    - Creates production build
    - Uses the `npm run build` command to produce production build ✅
3. Test → pull request into main branch
    - Tests production build
    - Uses the `npm run test` command to run all tests
4. Deploy → main branch
    - Used to deploy to production
    - Create pull request to merge staging branch to main branch which Vercel is connected to that deploys when changes are detected


Commands
npm run docker:build
npm run docker:start
npm run docker:stop
npm run docker:remove