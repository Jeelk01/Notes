// ------------------------------ Conditional Rendering ------------------------------

// based on codition
// if user is login then Log out
// if not then login

// types
// 1. if/else
// 2. ternary operator
// 3. Logical operator ( && - short circuiting )
// 4. early return  ( recursion )
// 5. using || operator (if primary condition falls then at least this should be presented)


// Usecases
// authentication Flow --> Show login form if user is not Authenticated.
// Show Dashboard is user  is Logged in
// Display Spinner when data is being fetched
// Show error message conditionally ( In Forms )
// Toggle between Dark and light mode

// Best Practise
// Always Handle unexpected cases --> Provide default in switch , else in if....


// Use Simpler approach
// --------------------------------------------------
// ✅ Better
//{isLoggedIn && <h1>Welcome back!</h1>}
// ❌ Unnecessary ternary
//{isLoggedIn ? <h1>Welcome back!</h1> : null}

// Extract Complex Conditions into Function
// --------------------------------------------------
// function isAdmin(user) {
//     return user && user.role === "admin";
//   }  
//   {isAdmin(user) && <AdminPanel />}
  
// Avoid Nested Ternary operator
// --------------------------------------------------
// ❌ Bad
// {status === "loading" ? <Loading /> : status === "error" ? <Error /> : <Data />}

// // ✅ Better
// function renderContent(status) {
//   switch (status) {
//     case "loading":
//       return <Loading />;
//     case "error":
//       return <Error />;
//     default:
//       return <Data />;
//   }
// }

// {renderContent(status)}

// Use Fragments to avoid unnecessary DOM elements  <> </>
// --------------------------------------------------
// return (
//     <>
//       {isAuthenticated ? <Dashboard /> : <Login />}
//     </>
//   );
  


// Standard Configurations for large scale React Application
// --------------------------------------------------
// To maintain standardization, store conditions and configurations in a separate file.
// Centralized settings are easier for midifications.
// improve code maintability.

// export const UI_CONFIG = {
//     showSidebar: true,
//     enableDarkMode: false,
//     maintenanceMode: false,
//   };
  
// import { UI_CONFIG } from "./config";

// {UI_CONFIG.showSidebar && <Sidebar />}


// --------------------------------------------------
// Use Feature flag for configurable UI

// Feature Flags in Real-World Applications
// Feature flags (feature toggles) allow dynamic control over features without redeploying code. They are widely used for:

// 🔹 Key Use Cases:
// ✅ Gradual Rollouts (Canary Releases)    – Control feature exposure (e.g., Facebook, LinkedIn).
// ✅ A/B Testing & Personalization         – Serve different versions for optimization (e.g., Amazon, Netflix).
// ✅ Beta Testing & Role-Based Access      – Enable features for selected users (e.g., Google AI).
// ✅ Kill Switch (Instant Rollback)        – Quickly disable faulty features (e.g., Stripe, PayPal).
// ✅ Dark Launching New Features           – Test features in production without public access (e.g., YouTube, Spotify).
// ✅ Premium Feature Access                – Control paywall features dynamically (e.g., LinkedIn, Medium).
// ✅ Game Development (Limited-Time Events)– Enable seasonal events (e.g., Fortnite, Call of Duty).
// ✅ Enterprise SaaS Customization         – Activate features per customer (e.g., Salesforce, HubSpot).

// 🔹 Implementation Approaches:
// 1️⃣ Simple Config File (featureFlags.js)       – Good for small apps, requires redeployment.
// 2️⃣ React Context (FeatureFlagProvider)        – Centralized, reusable for medium apps.
// 3️⃣ External Services (LaunchDarkly, ConfigCat)– Ideal for enterprise apps, supports A/B testing & remote updates.

// 🔹 Best Choice?
// ✔ Small apps → Config file
// ✔ Scalable apps → React Context
// ✔ Enterprise apps → Feature flag services (LaunchDarkly, Unleash)

// Would you like a code example for a feature flag dashboard in React? 🚀

