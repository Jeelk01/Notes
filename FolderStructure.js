// ------------------------- Folder Structure in React -------------------------

// Structure

//        my-react-app/
//        ├── node_modules/
//        ├── public/
//        │   ├── index.html
//        │   └── ...
//        ├── src/
//        │   ├── components/
//        │   ├── App.js
//        │   ├── index.js
//        │   └── ...
//        ├── .gitignore
//        ├── package.json
//        ├── package-lock.json
//        └── README.md


// node_modules
// This folder contains all the installed packages and their dependencies required by your project.
// You should not manually modify anything inside this directory.


// public
// the public directory serves as the root directory for static files. These files are not processed by Webpack but are served directly.
// This foldr contains all static files like images, videos , fonts etc,
    // index.html file in public folder executes in react server.
    // file that actually run.
    // it containt of an element div with id =  'root'.
    // all react related code will be goes in <div id='root'> </div>.


// src
// src (source) name must be src no other name allowed.
// all react related code shoulb written inside src folder.
// all source file like css , js.


// package.json
// It contains metadata about the project and manages dependencies, scripts, and other project-specific configurations. Below is an explanation of the typical structure and fields found in a package.json file for a React project.
// It includes name , version , description , scripts , dependencies.


// .gitignore
// The .gitignore file is an essential part of any Git repository. It specifies which files and directories should be ignored by Git, preventing them from being tracked and included in version control. This is particularly useful for excluding files that are generated during the build process, dependencies, or any other files that do not need to be shared with collaborators.