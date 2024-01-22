// declaring variable with var
var name; // variable `name` has no value

var name = "james"; // variable `name` value has been changed/updated to "james"document.getElementById('test').innerHTML = "inner";

// declaring variable with var
var name; // variable `name` has no value

var name = "james"; // variable `name` value has been changed/updated to "james"


// declaring variable with let
let hisName; // variable `name` has no value

hisName = "james"; // variable `name` value has been changed/updated to "james"
//note:  `let` is ommitted in this one because `let` is use to declare block-scoped local variable

// declaring variable with const
const staticName = "James"; // variable `name` has a value of "james" and the value cannot be overriden

// Hoisting
console.log(x); // Outputs: undefined

var x = 1;

console.log(x) // Outputs: 1


sayHello(); // Outputs: "Hello, World!"
function sayHello() {
  console.log("Hello, World!");
}

// Data type
// string
// const str = "This is a string";

// number
// const num = 10;

// bigint
const bigInt = 10n;

// boolean
const isSuccess = true;

// undefined
const un = undefined;

// Symbol
const sym = Symbol("my symbol")

// null
const isNull = null;

// Non-primitive
// object
const obj = {
  key: 'value',
  name: 'kaysam_dev',
  year: 10
}

// Arrays
let fruits = ["apple", "banana", "orange"];

// function
function greet(name) {
  return "Hello, " + name + "!";
}

// Other Built in objects
let currentDate = new Date();
let regexPattern = /[a-z]+/;
let myMap = new Map();


// Implicit conversion

// Example 1: Number to String
let num = 42;
let str = "The answer is: " + num; // JavaScript converts num to a string implicitly

console.log(str); // Output: "The answer is: 42"

// Example 2: String to Number
let strNum = "123";
let numFromStr = strNum + 5; // JavaScript converts strNum to a number implicitly

console.log(numFromStr); // Output: 128 (numeric addition instead of string concatenation)

// Example 3: Boolean to Number
let boolValue = true;
let numFromBool = boolValue + 10; // JavaScript converts boolValue to 1 implicitly

console.log(numFromBool); // Output: 11



// Explicit conversion

// Example 1: Number to String (explicit conversion)
let numE = 42;
let strE = String(numE); // Using the String() function to explicitly convert to a string

console.log(strE); // Output: "42"

// Example 2: String to Number (explicit conversion)
let strNumE = "123";
let numFromStrE = Number(strNumE); // Using the Number() function to explicitly convert to a number

console.log(numFromStrE); // Output: 123

// Example 3: String to Integer (explicit conversion)
let floatStr = "3.14";
let integerFromStr = parseInt(floatStr); // Using parseInt() to convert to an integer

console.log(integerFromStr); // Output: 3

// Example 4: Boolean to String (explicit conversion)
let boolValueE = true;
let strFromBool = String(boolValueE); // Using String() to convert to a string

console.log(strFromBool); // Output: "true"


// Equality Comparison
// Loose equality
5 == "5";      // true (number 5 is coerced to a string)
true == 1;     // true (boolean true is coerced to number 1)
null == undefined;  // true (null and undefined are considered equal)


// Strict equality
5 === "5";      // false (number 5 is not equal to string "5")
true === 1;     // false (boolean true is not equal to number 1)
null === undefined;  // false (strict equality distinguishes null and undefined)
