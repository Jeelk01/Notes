// ------------------------------------- Router --------------------------------------

// React Router is a library in used in React Application to enable Navigation between different pages or views without refreshing the entire webpage.
// it allows developers to create single-page-application with multiple views by managing the URL changes efficiently.



// createBrowserRouter
// A new way introduced in React Router.
// Definning routes in Structured and modern way.

// we are defining all routes in single configuration object and pass them to createBrowserRouter.


// Basic Structure 
// We pass array to the createBrowserRouter that contains object.

// each object is containing information related single route

// structure of route object
// In typeScript in built type object for route object is " RouteObject "

// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Key                 Type                     TypeScript                                                       Description
// ------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// path                string                   string                                                           defines URL in router
// element             JSX.Element              JSX.element                                                      The Component To render when route match
// index               boolean                  boolean                                                          Marks the route as default route within parent
// children            Array<RouteObject>       RouteObject[]                                                    Defines Nested route inside parent
// loader              Function                 (args : LoaderFunctionArgs) : Promise<any> | any                 Fetches data before Rendering the Component
// action              Function                 (args : ActionFunctionArgs) : Promise<Any> | any                 Handles the form Submissions
// lazy                Function                 () => Promise<{Component: React.Component<any> }>                Loads components lazily using dynamic imports (React.lazy)
// errorElement        JSX.Element              JSX.Element                                                      A fallback UI when an error Occur
// hasErrorBoundry     boolean                  boolean                                                          Enables Automatic error boundry
// caseSensitive       boolean                  boolean                                                          Makes path matching case-sensitive (/Home ≠ /home)
// id                  string                   string                                                           an unique identifier fro the route
// Handles             object                   Record<string,unknown>                                           Custom metadata for route



// is we use <a> </a>  tag in react it reload entire page, making the app slow and inefficient.
// but in react it is SPA so
// we are using 
// Link tag or NavLink tag
// or
// useNavigate Hook


// Link Tag
// prop	               Type	Description	                                                            Example
// -------------------------------------------------------------------------------------------------------------------------------------------------------------   
// to	               string or { pathname: string, state?: any }	                                   Destination path (required)	<Link to="/dashboard" />
// replace	          boolean If true, replaces current history entry instead of pushing a new one	<Link to="/profile" replace />
// state	object	     Pass data to the destination route	                                             <Link to="/profile" state={{ userId: 1 }} />
// reloadDocument	     boolean	Forces a full page reload like a normal <a> tag	                    <Link to="/about" reloadDocument />
// relative	          "route" or "path"	Defines how to path is resolved	                         <Link to="settings" relative="path" />

// NavLink Tag
// With navlink tag we can apply classname
// className dynamically applies "active-link" class when active

// Prop	          Type	                                                                 Description	                                             Example
// -------------------------------------------------------------------------------------------------------------------------------------------------------------
// to	          string or { pathname: string, state?: any }	                         Destination path (required)	                              <NavLink to="/dashboard" />
// end	          boolean	                                                            Only applies "active" when path exactly matches	          <NavLink to="/profile" end />
// state	          object	                                                            Pass data to the destination route	                         <NavLink to="/profile" state={{ userId: 1 }} />
// className	     string or                                                             Dynamically sets class names based on active/pending state	<NavLink to="/home" className={({ isActive }) => isActive ? "active" : ""} />
//                  (args: { isActive: boolean, isPending: boolean }) => string	          
// style	          CSSProperties or                                                      Dynamically sets inline styles	                         <NavLink to="/home" style={({ isActive }) => ({ color: isActive ? "red" : "black" })} />
//                  (args: { isActive: boolean, isPending: boolean }) => CSSProperties	
// reloadDocument	boolean                                                               Forces a full page reload like a normal <a> tag	          <NavLink to="/about" reloadDoc