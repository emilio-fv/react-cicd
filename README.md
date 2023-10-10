This repo is to test out a simply CI/CD pipeline for a React app using Github Actions

1. Develop → create the source code 
    1. Use Docker to create a development environment that will run on any device
    2. Independent branches will be used for new features, bug fixes, etc.
2. Build → create production build
    1. When pushed to the development or master branch, production build is created & tested
    2. Setup the `npm run build` command to produce production build
3. Test → test production build
    1. Setup the `npm run test` command to run all tests
4. Deploy → deploy production build
    1. Create pull request to merge development branch to master branch which Vercel is connected to to deploy automatically upon changes