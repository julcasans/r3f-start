# React Three Fiber Starter Project

## Overview

This project scaffold provides a quick and easy way to set up a new React Three Fiber (R3F) application with a basic project structure and essential dependencies.

## Prerequisites

- Node.js (version 18.0 or higher)
- npm or yarn package manager

## Installation

### Installing degit

`degit` is a lightweight project scaffolding tool that allows you to clone repositories without the full Git history. Install it globally using npm:

```bash
npm install -g degit
```

Or using yarn:

```bash
yarn global add degit
```

## Creating a New Project

To create a new React Three Fiber project, use the following command:

```bash
degit julcasans/r3f-start <folder-name>
```

If you omit the `<folder-name>`, the repository will be cloned to the current directory.

### Example Usage

```bash
# Create project in a new directory
degit julcasans/r3f-start my-r3f-project

# Clone directly to current directory
degit julcasans/r3f-start
```

## Post-Installation Steps

1. Navigate to the project directory:

   ```bash
   cd my-r3f-project   # or the directory you specified
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm start
   # or
   yarn start
   ```

## Project Structure

- `src/`: Source code directory
- `public/`: Public assets and HTML template
- `package.json`: Project dependencies and scripts

## Available Scripts

- `npm start` / `yarn start`: Runs the app in development mode
- `npm run build` / `yarn build`: Builds the app for production
- `npm run test` / `yarn test`: Runs test suites

## Technologies Included

- React
- React Three Fiber
- Three.js
- Vite
- ESLint
- Prettier

## Contributing

Feel free to open issues or submit pull requests to improve this starter template.

## License

[MIT](https://github.com/Rich-Harris/degit/blob/master/LICENSE.md)

## Acknowledgments

- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [degit](https://github.com/Rich-Harris/degit)
