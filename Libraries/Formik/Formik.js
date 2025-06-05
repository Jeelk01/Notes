// -------------------- Formik --------------------

// Formik is popular open-source library in React designed to simplify form handling , validation and submission.
// Formik provides tools to manage form state , handlers and validation

// Why..?
// Managing form data
// Form Submission
// Form validation and error message

// 1. Form state management
// values: Current values of form fields.
// errors: Validation errors for fields.
// touched: Tracks which fields have been interacted with.
// isSubmitting: Whether the form is currently submitting.

// 2. Validation
// Formik supports three validation methods:
// Yup Integration: Use Yup schemas for declarative, schema-based validation.
// Custom Validation Functions: Implement custom logic to validate fields.
// Field-Level Validation: Attach validation to individual fields.

// 3. Handlers
// Formik provides handlers for key events:
// handleChange: Updates field values in the state when user input changes.
// handleBlur: Marks fields as "touched" when they lose focus.
// handleSubmit: Submits the form and triggers validation.


// To use formik in your code

// install
// npm install formik
// or
// yarn add formik

// then import useFormik Hook from 'formik'
// useFormik hook takes an object as parameter
// this object contains properties and methods to manage form states

// property  ( camelCased )
// name attributes corresponding to the form fields

// 1. initialValues - object
// contains initial values for all form fields

// formik.handleChange
// update the state

// formik.values.<name in fields>
// which value to be displayed
// using formik.values we can access form field data at anytime
// ** formik is object created using formik hook.

// 2. onSubmit
// it's a method that accept object of values.
// it gets triggered when form is submitted
// it receives the current form values as its argument.
// to use onSubmit in form
// <form onSubmit={formik.handleSubmit}>

// 3. validate
// a function that receives object of values.
// It should return an object where the keys are field names and the values are the error messages for those fields.
// keys for the returning object must same as values name

// Displaying Error Messages using { formik.errors.<value> ? ( some code or action ) : null }
// but this will show the error message even if user hasn't visited the field
// we should display error message after user visits the field according to validation

// to keep track of the field user has visited use onBlur prop
// it keeps the track in formik.touched object