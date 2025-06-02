// Packages
// In npm, a package is any piece of code (usually a module or library) that can be reused, shared, and versioned through the npm registry or a local setup.


// An npm package is:
// A directory with a package.json file.
// Usually contains JavaScript code (can also include TypeScript, assets, etc.).
// Can be published to the npm registry, or used locally.

// Installation of Packages

// Global and Local

// Type           | Command                               | Use Case
// ------------------------------------------------------------------------------------
// Local          | npm install <package>                 | For use inside your project
// Local (dev)    | npm install <package> --save-dev      | For development tools
// Global         | npm install -g <package>              | For CLI tools, used anywhere

// development tools ( --save-dev )
// Dev tools are packages that help you build, test, lint, and develop your application—but are not needed in production.

// Tool Type                | Purpose                          | Example Packages
// -----------------------------------------------------------------------------------------------
// Build tools              | Transpile/Bundle code            | webpack, vite, babel
// Linters                  | Code style checking              | eslint, stylelint
// Test runners             | Run tests automatically          | jest, mocha, vitest
// Formatters               | Auto-format code                 | prettier
// Type checkers            | Check types (for TypeScript)     | typescript
// Task runners             | Automate tasks                   | gulp, grunt
// Mocking/Testing utils    | Test helpers                     | @testing-library/react, sinon

// dependencies and devdependencies
// dependencies needed in production and devdependencies are not needed in production but during development.


// Installing Specific versions
// --------------------------------------------------------------
// specific version
// npm install <package>@<version>
// Latest version
// npm install <package>@latest
// Patch updates only
// npm install <package>@~version
// MINOR and PATCH updates
// npm install <package>@^version


// Updating Packages
// --------------------------------------------------------------
// Update single package
// npm update <package>
// update all packages
// npm update