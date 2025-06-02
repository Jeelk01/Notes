// Semantic versioning
// NPM follows semantic versioning to manage versions of packages.

// MAJOR.MINOR.PATCH

// MAJOR version ( X.0.0 )
// Breaking changes
// When existing behavior is changed or removed.
// Indicates that code is not backward compatible

// MINOR version ( 0.X.0 )
// New feature that is backward compatible
// Does not break existing functionality.

// PATCH version ( 0.0.X )
// Bug fixes or very minor improvements.
// Backward compatible.

// Versioning Syntax in package.json

// 1. Tilde (~)
// Allows patch update only
// version: "~1.2.3"   <---- This will allow only till < 1.3.0

// 2. Caret (^)
// Allows MINOR and PATCH updates 

// version: "^1.2.3" <----- This will allow only till < 2.0.0

