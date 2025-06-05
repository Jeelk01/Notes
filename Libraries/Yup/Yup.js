// -------------------- Yup --------------------

// Yup is a JavaScript schema builder and validation library that allows you to define and enforce rules for validating data structures.
// to implement yup in your file
// import * as Yup from 'yup'


// 1. Define data structures (schemas).
// 2. Validate data according to the defined rules.
// 3. Generate error messages when validation fails.

// Basic Data Types
// String
// Number
// Boolean
// Date
// Array
// Object

// 1. Define Schema
// schema definition using Yup.object().shape()

const schema = Yup.object().shape({
    name: Yup.string(),
    age: Yup.number(),
});
// ------------------------- Yup.string() -------------------------
// 1. String Validation Methods (Yup.string())
// Yup.string() defines a field as a string and provides the following methods:
// 1.required( [message] )
// 2. min( [length] , [message] )
// 3. max( [length] , [message] )
// 4. email( [message] )
// 5. matches( [regex], [message] )
// 6. length( [length], [message] )
// 7. trim() 
// 8. lowercase()
// 9. uppercase()

// required([message]): Ensures the string is not null or undefined and provides a custom error message if it is missing.
// Example: Yup.string().required('Name is required')

// min([length], [message]): Validates that the string has at least the specified minimum length.
// Example: Yup.string().min(3, 'Must be at least 3 characters long')

// max([length], [message]): Validates that the string does not exceed the specified maximum length.
// Example: Yup.string().max(50, 'Max 50 characters')

// email([message]): Ensures the string is a valid email format.
// Example: Yup.string().email('Invalid email address')

// matches([regex], [message]): Validates that the string matches the given regular expression.
// Example: Yup.string().matches(/^[A-Za-z0-9]+$/, 'Only alphanumeric characters allowed')

// length([length], [message]): Validates that the string has exactly the specified length.
// Example: Yup.string().length(10, 'Must be exactly 10 characters')

// trim(): Trims leading and trailing whitespace from the string.
// Example: Yup.string().trim()

// lowercase(): Validates that the string is in lowercase.
// Example: Yup.string().lowercase('Should be lowercase')

// uppercase(): Validates that the string is in uppercase.
// Example: Yup.string().uppercase('Should be uppercase')


// ------------------------- Yup.number() -------------------------
// 2. Number Validation Methods (Yup.number())
// Yup.number() defines a field as a number.
// 1.required( [message] )
// 2. min( [value] , [message] )
// 3. max( [value] , [message] )
// 4. positive( [message] )
// 5. negative( [message] )
// 6. integer([message])
// 7. lessthan([value],[message])
// 8. moreThan([value],[message])

// required([message]): Ensures the number is not null or undefined.
// Example: Yup.number().required('Age is required')

// min([value], [message]): Validates that the number is greater than or equal to the specified minimum value.
// Example: Yup.number().min(18, 'Must be at least 18 years old')

// max([value], [message]): Validates that the number is less than or equal to the specified maximum value.
// Example: Yup.number().max(100, 'Age cannot exceed 100 years')

// positive([message]): Ensures the number is positive.
// Example: Yup.number().positive('Must be a positive number')

// negative([message]): Ensures the number is negative.
// Example: Yup.number().negative('Must be a negative number')

// integer([message]): Validates that the number is an integer (no decimals).
// Example: Yup.number().integer('Must be an integer')

// lessThan([value], [message]): Validates that the number is less than the specified value.
// Example: Yup.number().lessThan(100, 'Must be less than 100')

// moreThan([value], [message]): Validates that the number is greater than the specified value.
// Example: Yup.number().moreThan(10, 'Must be greater than 10')

// ------------------------- Yup.boolean() -------------------------
// 3. Boolean Validation Methods (Yup.boolean())
// Yup.boolean() defines a field as a boolean value (true or false).
// 1. required([message])
// 2. oneOf([values], [message])

// required([message]): Ensures the field is not null or undefined and has a boolean value.
// Example: Yup.boolean().required('This field is required')

// oneOf([values], [message]): Validates that the boolean value is one of the provided values (true or false).
// Example: Yup.boolean().oneOf([true], 'You must accept the terms')

// ------------------------- Yup.array() -------------------------
// Array Validation Methods (Yup.array())
// Yup.array() defines a field as an array.

// 1. required([message])
// 2. required([message])
// 3. max([length], [message])
// 4. of([schema])
// 5. unique([message])
// 6. of(Yup.<type>())
// 7. nullable()
// 8. compact()
// 9. transform()

// required([message]): Ensures the field is not null or undefined and that the value is an array.
// Example: Yup.array().required('This field is required')

// required([message]): Validates that the array has at least the specified number of elements.
// Example: Yup.array().min(1, 'At least one item is required')

// max([length], [message]): Validates that the array does not have more than the specified number of elements.
// Example: Yup.array().max(5, 'Cannot have more than 5 items')

// of([schema]): Defines the validation schema for the items inside the array.
// Example: Yup.array().of(Yup.string().required('Tag is required'))

// unique([message]): Ensures the array contains unique elements (works for array of primitives).
// Example: Yup.array().unique('Array items must be unique')

// of<type>(): Used to specify the schema for the items within the array
// Example: Yup.array().of(Yup.string()) 

// nullable(): Allows the array to be null.( by default, arrays must be defined )
// Example: Yup.array().nullable()

// compact(): Removes items from the array that don't pass a custom test. The resulting array will only contain values that pass the test.
// Example: Yup.array().compact((value) => value !== null)

// transform(): Allows transforming the array before validation (e.g., to remove empty values).
// Example: Yup.array().transform((value) => value.filter(item => item !== null))

// ------------------------- Yup.object() -------------------------
// Object Validation Methods (Yup.object())
// Yup.object() defines a field as an object.


// 1. shape([object])
// 2. 
// 3. 
// 4. 
// 5. 

// shape([object]): Defines the validation schema for the properties of the object.
        // Yup.object().shape({
        //     name: Yup.string().required('Name is required'),
        //     age: Yup.number().required('Age is required'),
        // });

// required([message]): Ensures the field is not null or undefined and that the value is an object.
// Example: Yup.object().required('Object is required')
  
// noUnknown([message]): Ensures that the object does not contain any keys that are not explicitly defined in the schema.
// Example: Yup.object().noUnknown('Unknown fields are not allowed')

// ------------------------- Yup.mixed() -------------------------
// Mixed Validation Methods (Yup.mixed())
// Yup.mixed() provides general-purpose validation for any type of data.

// 1. required([message])
// 2. oneOf([values], [message])
// 3. notOneOf([values], [message])

// required([message]): Ensures the field is not null or undefined.
// Example: Yup.mixed().required('This field is required')

// oneOf([values], [message]): Validates that the value is one of the given options.
// Example: Yup.mixed().oneOf([true, false], 'Must be true or false')

// notOneOf([values], [message]): Validates that the value is not one of the given options.
// Example: Yup.mixed().notOneOf([null, undefined], 'Cannot be null or undefined')

// import * as Yup from 'yup';
// const schema = Yup.object().shape({
//   customField: Yup.mixed().required('This field is required'),
// });


// ------------------------- Yup.date() -------------------------
// 6. Date Validation Methods (Yup.date())
// Yup.date() defines a field as a date and provides the following methods:

// 1. required([message])
// 2. min([date], [message])
// 3. max([date], [message])
// 4. positive([message])
// 5. before([date], [message])
// 6. after([date], [message])

// required([message]): Ensures the field is not null or undefined and is a valid date.
// Example: Yup.date().required('Date is required')

// min([date], [message]): Validates that the date is after the specified minimum date.
// Example: Yup.date().min(new Date(), 'Date must be in the future')

// max([date], [message]): Validates that the date is before the specified maximum date.
// Example: Yup.date().max(new Date(), 'Date cannot be in the future')

// positive([message]): Ensures the date is positive (i.e., after the Unix epoch, January 1, 1970).
// Example: Yup.date().positive('Date must be in the future')

// before([date], [message]): Ensures the date is before the given date.
// Example: Yup.date().before(new Date(), 'Date must be before today')

// after([date], [message]): Ensures the date is after the given date.
// Example: Yup.date().after('2023-01-01', 'Date must be after January 1, 2023')
