# Todos

[![Netlify Status](https://api.netlify.com/api/v1/badges/94ad28c3-2ccd-40b2-9b9f-35ab89148f43/deploy-status)](https://app.netlify.com/sites/create-react-app-typescript-todo-example/deploys)
![CI](https://github.com/laststance/create-react-app-typescript-todo-example-2020/workflows/CI/badge.svg)
[![Cypress.io](https://img.shields.io/badge/tested%20with-Cypress-04C38E.svg)](https://www.cypress.io/)
![check-code-coverage](https://img.shields.io/badge/code--coverage-92%25-brightgreen)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![All Contributors](https://img.shields.io/badge/all_contributors-5-orange.svg?style=flat-square)](#contributors)
[![Depfu](https://badges.depfu.com/badges/b291947c58892a6d78e4f3374c4a6d01/overview.svg)](https://depfu.com/github/laststance/create-react-app-typescript-todo-example-2020?project_id=9618)
[![This project is using Percy.io for visual regression testing.](https://percy.io/static/images/percy-badge.svg)](https://percy.io/laststance/create-react-app-typescript-todo-example-2020)

## Stack

- [TODO-CSS-Template](https://github.com/Klerith/TODO-CSS-Template)(Borrowing HTML & CSS Thanks! 👍 )
- [Create React App](https://facebook.github.io/create-react-app/) [v4.0.1](https://github.com/facebook/create-react-app/releases/tag/v4.0.1)
- [TypeScript](https://www.typescriptlang.org/) [v4.0.5](https://github.com/microsoft/TypeScript/releases/tag/v4.0.5)
- [ReachRouter](https://github.com/reach/router)
- [Styled-Components](https://styled-components.com/): CSS-in-JS
- [Recoil](https://recoiljs.org/): A state management library for React
- [Cypress](https://www.cypress.io/): E2E Testing
- [react-testing-library](https://github.com/testing-library/react-testing-library)
- [ESLint](https://eslint.org/)
  - [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier)
  - [@typescript-eslint/eslint-plugin](https://github.com/typescript-eslint/typescript-eslint#readme)
- [Netlify](https://www.netlify.com/): Deploy & Hosting
- [Github Actions](https://github.com/features/actions): Automation run tests, lint, typecheck, build
- [Depfu](https://depfu.com/github/ryota-murakami/create-react-app-typescript-todo-example-2020?project_id=9618): Keep latest npm packages automaticaly

## Installation

### 🔧 Prerequisites

- The app assumed installed `Node.js` newer than `10.16.3 LTS`(recommend newer than v14.8.0).
  If you have not it yet, follow the official [Node.js Doc](https://nodejs.org/en/) to install it.

**And then**

```bash
git clone git@https://github.com/qijingyu2013/todos.git
cd todos
yarn install # or npm install
yarn start # or npm run start
```

**Finally Edit Code** 😎

## 👩‍💻 Usage

### `yarn start`

After that you'll seen the console which are server processes messages.  
Let's follow the message and put in URL `http://localhost:3000/` your browsers adressbar,  
and then you'll got todo app as same as Demo. let's modify under the `src/` code feel free!!

Official Docs: https://create-react-app.dev/docs/getting-started#npm-start-or-yarn-start

### `yarn build`

After that You'll get bundled and optimization stuff in `build` directory.  
Also you can run production build with `serve` local webserver modules.

```bash
yarn global add serve
serve -s build
```

Official Docs: https://create-react-app.dev/docs/getting-started#npm-run-build-or-yarn-build

### `yarn lint`

[ESLint](https://eslint.org/) is at the top.
And setup [TypeScript ESLint](https://github.com/typescript-eslint/typescript-eslint), integrating [Prettier](https://prettier.io/) as a [eslint-plugin-prettier](https://github.com/prettier/eslint-plugin-prettier).

### `yarn lint:fix`

run wtih eslint --fix option.

### `yarn typecheck`

While developing and building, Babel stop transpile with TS error messages.
I can't find way static typecheck with babel,
so I'm using original TypeScript via npm and specified `tsc --noEmit` compile option that doesn't generate compiled code.

### `yarn test`

[Jest](https://jestjs.io/) is all-in-one test-runner built in [Create React App](https://facebook.github.io/create-react-app/) and covers function-level unit testing to component-behavior-level integration testing.
The Repo use to [react-testing-library](https://github.com/testing-library/react-testing-library) for component integration testing.

### `yarn cypress:open`

[Cypress](https://www.cypress.io/) is all-in-one E2E Testing tool which can deal testing on real browser.  
This command using [Electron](https://www.electronjs.org/) by Cypress default.

`yarn cypress:open` require `yarn start` before.

```bash
yarn start # Launch DevServer
yarn cypress:open
```

### `yarn cypress:run`

Run Cypress with [Electron](https://www.electronjs.org/).  
That's same as run all test on cypress GUI after run `yarn cypress:open`.

```bash
yarn start # Launch DevServer
yarn cypress:run
```

### `yarn cypress:run:leadless`

Run Cypress with headless [Electron](https://www.electronjs.org/).  
That mean this command complete all on a terminal without GUI.

```bash
yarn start # Launch DevServer
yarn cypress:run:headless
```

## LICENSE

MIT

