// npm : Node package manager

// yarn and pnpm are alternatives

// A standard package manager for node.JS
// used to install, share and manage javascript packages

// Key files and Folders

// package.json          : Project Meta + Dependencies
// package-lock.json     : Extract versions of installed packages
// node_modules/         : All download packages live here

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
// -------------------------------- NPM WORKSPACE --------------------------------
// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~


// What is it..?
// NPM workspaces are built-in features of npm that let you manage multiple packages in a monorepo( single repo with multiple projects)


// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// What is monorepo ? 

// link : https://monorepo.tools/
// monolithic repository

// General Monorepo Structure
// /monorepo-root
// │
// ├── apps/                     # All user-facing applications
// │   ├── web/                  # Main web frontend
// │   ├── admin/                # Admin dashboard
// │   └── mobile/               # React Native or mobile app
// │
// ├── packages/                 # Shared code/libraries (reusable across apps)
// │   ├── ui/                   # Shared UI components (buttons, modals, etc.)
// │   ├── auth/                 # Authentication logic shared by apps
// │   ├── api-client/           # Reusable API request logic
// │   └── config/               # Shared configs (eslint, tailwind, etc.)
// │
// ├── tools/                    # Custom CLI tools, build scripts, dev helpers
// │   └── codegen/              # GraphQL or OpenAPI code generators
// │
// ├── .github/                  # GitHub workflows (CI/CD)
// │
// ├── .eslintrc.json            # Root-level lint config
// ├── tsconfig.base.json        # Base TypeScript config for all packages
// ├── package.json              # Root-level scripts and shared deps
// ├── turbo.json / nx.json      # Monorepo tool config (Turborepo or Nx)
// ├── yarn.lock / pnpm-lock.yaml
// └── README.md
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
// - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - - -

// NPM Workspaces 
// allows you to
// Share code among the packages
// Runs command across all the packages


// basic workspace setup

// 1. Create Root Project
// mkdir my-monorepo && cd my-monorepo
// npm init -y

// 2. Define Workspaces in package.json
// {
//      "name": "my-monorepo",
//      "private": true,
//      "workspaces": ["packages/*"]
//    }
// * private: true is required for workspaces at the root level
// * packages/* means: look in the packages/ folder for individual projects

// 3. Create Workspace Packages
// my-monorepo/
// ├── package.json
// └── packages/
//     ├── app/
//     │   └── package.json
//     └── utils/
//         └── package.json



// Nx
// Nx is a powerful monorepo build system and dev toolkit for JavaScript, TypeScript, and full-stack applications.
// Created by former Angular core team members at Nrwl.
// Supports React, Angular, Node.js, NestJS, Next.js, Express, Fastify, and more.


// What it does..?
// Nx gives you tools to manage, scale, and optimize monorepos.

// Feature                            |    What it does
// ------------------------------------------------------------------------------------------------------
// Dependency Graph                   |    Tracks and visualizes internal dependency relationships
// Task Scheduling                    |    Runs only what changed (intelligent, cache-aware builds/tests)
// Incremental Builds                 |    Speeds up CI/CD by avoiding redundant steps
// Code Generation                    |    Generates apps, libs, services, configs via CLI or plugins
// Workspace Management               |    Organizes apps/libraries with generators and folder structure
// Custom Plugins                     |    Extend or add support for more frameworks
// Built-in Lint/Test/Build           |    Unified tooling across your monorepo

// Other tools like Nx
// TurboRepo, Lerna, Bazel, Rush.js, Yarn/NPM workspaces

// Concept             | Description
// --------------------------------------------------------------
// What is Nx?         | Monorepo toolkit + smart task runner
// Why needed?         | To manage complexity, speed up workflows
// What it solves?     | Duplication, slowness, inconsistencies
// When to use?        | For multi-project codebases, large teams
// Alternatives?       | TurboRepo, Lerna, Bazel, Yarn/NPM workspaces