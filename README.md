## setup

1. Create the project

   > npx create-react-app PROJECT_NAME

2. Add automatic formatting as in [this tutorial](https://create-react-app.dev/docs/setting-up-your-editor/)

   > npm install --save husky lint-staged prettier

   - Edit the package.json with:

   ```
      "husky": {
        "hooks": {
          "pre-commit": "lint-staged"
        }
      },


     "lint-staged": {
       "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}": [
         "prettier --write"
       ]
     },
   ```

   - Format the code for the first time:

   ```
   ./node_modules/.bin/prettier --write "src/**/*.{js,jsx,ts,tsx,json,css,scss,md}"
   ```
