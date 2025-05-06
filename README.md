# My Workspace
This workspace is generated using NX monorepo _"create-nx-workspace"_ command. 
```
npx create-nx-workspace@latest my-workspace --preset=react-monorepo
```
This workspace consists of 2 react application which are generated using NX apps generate command:
```
npx nx g @nx/react:app my-react-app
```

We also have some common libraries and components which are being shared between multiple app. NX provides generate command to generate those libraries as well.
```
npx nx g @nx/react:library libs/products --unitTestRunner=vitest --bundler=none
npx nx g @nx/react:library ui --directory=shared --style=css
```

Folder structure for the workspace app is as followed:
```
  - my-workspapce
    - apps
      - first-app
      - second-app
    - shared
      - common-ui
      - orders
      - products
    - package.json
    ... other config files
```

---

## What is NX monorepo and why to use it ?
An monorepo is a workspace that manages multiple applications and libraries in a single repository. 
  ### Benefits of using NX monorepo:
  - Manage all your apps, libraries, and utilities in **one place**.
  - Smart Dependency Graph to analyze and see which app depends on which libraries.
  - Run commands **only on affected projects** (`nx affected`).
  - Use Cache: **Speeds up CI/CD pipelines** dramatically by skipping unchanged code.
  - Enforces **project boundaries** using tags and lint rules.
  - Works with many technologies: React, Angular, Node.js, NestJS, Next.js, etc.
  - Generate components, libraries, or apps with consistent patterns.

## Run tasks

To run the dev server for your app, use:

```sh
npx nx serve first-app
```

To create a production bundle:

```sh
npx nx build first-app
```

To see all available targets to run for a project, run:

```sh
npx nx show project first-app
```

To see all available targets to run for a project, run:

```sh
npx nx show project first-app
```

## What are cons of using it ?
  - May not be suitable for small projects.
  - Caching works best with **Nx Cloud (a paid service)** for distributed caching and remote task execution. Without it, large monorepos can suffer from slow CI builds.

--- 

## Steps to run the application ?
  - ```npm install```
  - To run all apps: ```npm run start:alll```
  - To run specific application in workspace: ```npm run start:<app-name>```
  - To generate dependencies graph: ```npm run graph```
  - Check the task has a "Cacheable" label in the Project Details View: ```nx show project <project-name> --web```.

## Major issue faced while setting up NX monorepo ?
 - Circular Dependencies
 - Cache issues
