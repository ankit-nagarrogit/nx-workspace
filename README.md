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
### 1. Single Source of Truth
- Manage all your apps, libraries, and utilities in **one place**.
- Easier versioning, refactoring, and visibility across teams.
---
### 2. Smart Dependency Graph
- Nx analyzes your project to build a **dependency graph**, letting you:
  - See which app depends on which libraries.
  - Run commands **only on affected projects** (`nx affected`).
---
### 3. Built-in Caching
- Nx caches builds, tests, and linting results.
- **Speeds up CI/CD pipelines** dramatically by skipping unchanged code.
---
### 4. Scalable Architecture
- Helps you structure your code into **domain-specific libraries**.
- Enforces **project boundaries** using tags and lint rules.
---
### 5. Polyglot and Framework-Agnostic
- Works with many technologies: React, Angular, Node.js, NestJS, Next.js, etc.
- You can mix different frameworks in the same monorepo.
---
### 6. Powerful CLI and Generators
- Generate components, libraries, or apps with consistent patterns.
- Reduce boilerplate and human error.
---
### 7. Customizable Task Pipelines
- Define **custom executors** and **task pipelines** (like building, testing, deploying).
- Easily automate complex workflows.
---
### 8. Integrated Tools and Plugins
- Built-in support for:
  - Testing (Jest, Vitest, Cypress)
  - Linting (ESLint)
  - Formatting (Prettier)
  - Building and serving apps
---
### 9. Great Developer Experience
- Modern IDE integrations.
- Dependency visualization.
- Workspace schematics for repeatable development.
---

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
### 1. Overhead for Small Projects

- **Issue**: For a single app or small codebase, Nx may be overkill.
- **Impact**: Added complexity without significant benefit.

---

### 2. Complex Configuration

- **Issue**: Managing large numbers of apps/libs requires careful configuration of `project.json`, `tsconfig`, workspace settings, etc.
- **Impact**: Misconfigurations can break caching, builds, and dependency checks.

---

### 3. Scaling CI/CD Without Nx Cloud

- **Issue**: Nx works best with **Nx Cloud (a paid service)** for distributed caching and remote task execution.
- **Impact**: Without it, large monorepos can suffer from slow CI builds.

---

### 5. Not Ideal for Independent Teams

- **Issue**: Teams that want full autonomy over deployments, tooling, and versioning may find the shared nature of a monorepo limiting.
- **Impact**: Coordination overhead and possible dependency clashes.

---

### 6. Plugin Limitations

- **Issue**: Some community or official plugins may lag behind framework updates or lack features.
- **Impact**: You may need to write or maintain custom plugins or builders.

---

### 7. Tooling Performance

- **Issue**: Large workspaces may cause IDE slowdowns (especially with TypeScript or ESLint in VSCode).
- **Impact**: Slower developer feedback loop.

---

### 8. Requires Discipline

- **Issue**: If teams don’t enforce code boundaries (tags, scopes), the monorepo can become tangled.
- **Impact**: Reduced modularity, increased technical debt.

---

### 9. Migration Complexity

- **Issue**: Migrating multiple existing repositories into a monorepo can be painful.
- **Impact**: Time-intensive process requiring coordination and refactoring.

---

## Steps to run the application ?
 - To run specific application in workspace: ```nx serve <app-name>```
 - To generate dependencies graph: ```nx graph```
 - Check the task has a "Cacheable" label in the Project Details View: ```nx show project <project-name> --web```.

## Major issue faced while setting up NX monorepo ?
 - Circular Dependencies
 - Cache issues
 - 
