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
const str = "This is a string";

// number
const num = 10;

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