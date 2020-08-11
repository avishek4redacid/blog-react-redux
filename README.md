## Getting started

You can view a live demo over at 

To get the frontend running locally:

- Clone this repo
- `npm install` to install all req'd dependencies
- `npm run start` to start the local server (this project uses create-react-app)

Local web server will use port 4100 instead of standard React's port 3000 to prevent conflicts with some backends like Node or Rails. You can configure port in scripts section of `package.json`: we use [cross-env](https://github.com/kentcdodds/cross-env) to set environment variable PORT for React scripts, this is Windows-compatible way of setting environment variables.

