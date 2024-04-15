# 100 DaysOfCoding

<b>Day 1/100</b><br>
<b>HTML Introduction</b><br>
HTML stands for HyperText Markup Language. It is used to design web pages using a markup language.

It is a combination of Hypertext and Markup.
- Hypertext defines the link between web pages
- A markup language defines the text document within the tag which defines the structure of web pages.

HTML PAGE STRUCTURE
![day1_100](https://github.com/sam0560/100DaysOfCode/assets/64938042/8da6c509-f628-4e01-97a4-f697e3a051b6)

`<!DOCTYPE html>` This is the document type declaration (not technically a tag). It declares a document as being an HTML document. The doctype declaration is not case-sensitive.

`<html>` This is called the HTML root element. All other elements are contained within it.

`<head>` The head tag contains the behind the scenes elements for a webpage. Elements within the head aren't visible on the front-end of a webpage. HTML elements used inside the <head> element include:
* `<title>` The title is what is displayed on the top of your browser when you visit a website and contains the title of the webpage that you are viewing. Document

* `<meta>` This tag encloses the meta data of the website that must be loaded every time the website is visited. For eg:- the metadata charset allows you to use the standard UTF-8 encoding in your website. This in turn allows the users to view your webpage in the language of their choice. It is a self closing tag.

* `<body>` The body tag is used to enclose all the visible content of a webpage. In other words, the body content is what the browser will show on the front-end.

An HTML document can be created using any text editor. Save the text file using `.html` or `.htm`. Once saved as an HTML document, the file can be opened as a webpage in the browser.
<br><br>
<b>Day 2/100</b><br>
<b>HTML5 </b><br>
HTML 5 is the fifth and current version of HTML. It has improved the markup available for documents and has introduced application programming interfaces(API) and Document Object Model(DOM).

HTML5 Semantics
Semantic Elements: Semantic elements have meaningful names which tell about the type of content. For example article, aside
,details, figcaption, figure, footer, header, main, mark, nav

<b>Day 3/100</b><br>
<b>HTML Elements </b><br>
<b>HTML heading tag</b><br>
The HTML heading tag is used to define the headings of a page. There are six levels of headings defined by HTML. These 6 heading elements are h1, h2, h3, h4, h5, and h6; with h1 being the highest level and h6 being the least.

`<!-- Heading -->
    <h1>This is Heading 1</h1>
    <h2>This is Heading 2</h2>
    <h3>This is Heading 3</h3>
    <h4>This is Heading 4</h4>
    <h5>This is Heading 5</h5>
    <h6>This is Heading 6</h6>
`<br>![Screenshot_01](https://github.com/sam0560/100DaysOfCode/assets/64938042/891d0f54-ad90-48e4-ac65-7a750ac8988e)
<br>
<b>HTML Paragraphs</b><br>
The `<p>` tag in HTML defines a paragraph. These have both opening and closing tags. So anything mentioned within `<p>` and `</p>` is treated as a paragraph.
<br>
<b>HTML Style Tag</b><br>
it is used to declare inline styling for HTML elements
`<tagname style="property:value;">`
<br>
<b>HTML `<hr>` Tag</b><br>
Use for inserting horizontal rule into document. <br>
<br>
<b>HTML `<br>` Tag</b><br>
Use for inserting break after a tag. <br>
The browser does not recognize new lines and paragraph formatting in the text. If you want to start a new line, you need to insert a line break with the help of the <br>.<br><br>

<b>Day 4/100</b><br>
<b>HTML Attribute </b><br>
<b>`class Attribute`</b><br>
The class is an attribute that specifies one or more class names for an HTML element.
The class attribute can be used on any HTML element.
The class name can be used by CSS and JavaScript to perform certain tasks for elements with the specified class name.<br>

<b>`id Attribute`</b><br>
The id attribute is a unique identifier that is used to specify the document. It is used by CSS and JavaScript to perform a certain task for a unique element.<br>
<b>Syntax:</b>
 `<tag id=""></tag>`<br>
Read on other attributes like;<br>
- HTML ondragend Event attribute<br>
- HTML dropzone attribute<br>
- HTML ondrag attribute<br>
- HTML ontoggle attribute<br>

<b>Day 5/100</b><br>
<b>Ecommerce with MERN stack</b><br>
I created data seeder for my harder coded products in my products.json file<br><br>
![Screenshot (117)](https://github.com/sam0560/100DaysOfCode/assets/64938042/663e85b9-38e3-4ce4-b0e5-b1d32b1b8876)

<br><b>Day 6/100</b><br>
<b>Updating Portfolio</b><br>
I worked on updating my porfolio website<br>
- Added my recent projects
- modified my resume
- Fixed screen responsiveness

<br>
<br><b>Day 7/100</b><br>
<b>Introduction to Javascript</b><br>
I read more on introduction to javascript, and I covered <br>
- What is JavaScript?
- History of Java Script
- JavaScript versions
- How to run JavaScript
<br>

<br><b>Day 8/100</b><br>
<b>Variable declaration</b><br>

In JavaScript, variable declaration is the process of defining a variable and allocating memory to store its value. You can think of a variable as a box or container that holds a value. To use variables in JavaScript, we first need to create it i.e. declare a variable. To declare variables, we use one of the var, let, or const keywords.<br>

Declaring variable using;<br>
var - The var statement declares a function-scoped or globally-scoped variable, optionally initializing it to a value.<br>
 ![image](https://github.com/sam0560/100DaysOfCode/assets/64938042/1dee6920-44c7-48c8-8011-6d0f3a22966c) <br>

let - The let declaration declares a block-scoped local variable, optionally initializing it to a value.<br>
 ![image](https://github.com/sam0560/100DaysOfCode/assets/64938042/75b9ce53-fa7c-4db8-b608-abc626b22419) <br>

The error below occurs when overriding a block-scoped local variable using `let` <br>
 ![image](https://github.com/sam0560/100DaysOfCode/assets/64938042/5c573c81-d2b7-41c5-8f62-4b83d1c3d0b2) <br>

const - Constants are block-scoped, much like variables declared using the let keyword. The value of a constant can’t be changed through reassignment (i.e. by using the assignment operator), and it can’t be redeclared (i.e. through a variable declaration). However, if a constant is an object or array its properties or items can be updated or removed.<br>
![image](https://github.com/sam0560/100DaysOfCode/assets/64938042/fd5d7305-6528-4c49-a18c-a361d93aad7c)
<br>


<br><b>Day 9/100</b><br>
<b>Javascript Hoisting</b><br>
JavaScript hoisting is a behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and functions in your code before they are declared.<br>

![hoisting2](https://github.com/sam0560/100DaysOfCode/assets/64938042/4b87f1a3-ad8c-4192-bb33-1be4736f1413)
![hoisting1](https://github.com/sam0560/100DaysOfCode/assets/64938042/0fbec366-4fa3-4fdb-ba64-4f9705f6055f)


<b>Variable naming rules</b><br>
rules in naming of variables;<br>
1.	Be descriptive<br>
2.	Don't be overly descriptive<br>
3.	Abbreviate long words<br>
4.	Use a casing convention to break words<br>

<br><b>Day 10-11/100</b><br>
<b>Data Type</b></br><br>
<i>Primitive data type</i><br>
Number<br>
BigInt<br>
String<br>
Boolean<br>
Null<br>
Undefined<br>
Symbol<br><br>
<i>-Non-primitivive data type</i><br>
Object<br>
Array<br>
function<br>
Built-in Objects

<br><b>Day 12/100</b><br>
<b>Ecommerce with MERN stack</b></br>
- Creating Error Handlers<br>
- Creating Error middleware<br>
- Setting production error and development error<br><br>
![image](https://github.com/sam0560/100DaysOfCode/assets/64938042/34d89d6b-e8e9-478a-89f5-0cf1714a5bc4)

<br><b>Day 13/100</b><br>
<b>Ecommerce with MERN stack</b></br>
Learn more on <br>
- Node.js Error-handling<br>
- Error types<br>
   - Operational errors<br>
   - Programmer errors<br>

source: https://www.toptal.com/nodejs/node-js-error-handling

<br>
<b>Day 14/100</b><br>
Work on implementing figma ui into frontend using html,css,js

<br><br>
<b>Day 15/100</b><br>
Developed the section to list Plants using CSS grid for a better layout.<br><br>
![Screenshot_1](https://github.com/sam0560/100DaysOfCode/assets/64938042/a0dcd8af-5f9b-4030-a348-adeed6fcf38f)<br><br>
![mobile](https://github.com/sam0560/100DaysOfCode/assets/64938042/b4eac155-02af-4967-833c-97d86565e423)
![mobile (1)](https://github.com/sam0560/100DaysOfCode/assets/64938042/e85c73f3-2b58-4283-8aae-5642b1509d4e)

<br><br>
<b>Day 16/100</b><br>
Learnt and practiced Linux syntax & functionalities<br>
- Managing packages using apt<br>
- file system navigation<br>
- directories and file handling<br>
     - creating file / directory<br>
     - copying file/directory<br>
     - deleting directory<br>
 
Also added few touches on my plant ecomerce project.<br>
Created an array for the plants an dynamically loop through it<br>
<br>
![Screenshot_3](https://github.com/sam0560/100DaysOfCode/assets/64938042/fdbe9de5-ce72-47b1-ab58-d0521ee0349a)
<br>
![Screenshot_4](https://github.com/sam0560/100DaysOfCode/assets/64938042/d2821acc-2194-4641-8ee0-7552c2a170bd)

<br><br>
<b>Day 17-18/100</b><br>
<b>JavaScript Type Casting</b><br>
- Implicit Conversion<br>
    Certainly! Implicit type conversions, also known as type coercion, occur when JavaScript runtime automatically converts one type of data to another.<br><br>

- Explicit Conversion
    Explicit type conversion, or type casting, occurs when you manually convert a value from one type to another. In JavaScript, you can use functions or operators to explicitly convert values between different types.
  ![implicit_convesion](https://github.com/sam0560/100DaysOfCode/assets/64938042/d43a6c32-cbe3-495b-b028-3d590b7a60c1)
  <br><br>
![explicit_convesion](https://github.com/sam0560/100DaysOfCode/assets/64938042/d52db7ff-eb57-4325-914c-7c26a9f1425a)

<br><br>
<b>Day 19-20/100</b><br>
<b>Ecommerce with MERN stack</b><br>

I made another improvement on my web application, writing code to solve this necessary errors.
<br>
- Catch async errors<br>
- Handling unhandle Promise rejection<br>
- Handling uncaught exception<br><br>

<br>
<b>Day 21-22/100</b><br>
<b>Javascript Equality Comparison</b><br>
Comparison operators are used in logical statements to determine equality or difference between variables or values. Comparison operators can be used in conditional statements to compare values and take action depending on the result.<br>
In JavaScript, there are two main ways to perform equality comparisons: loose equality (==) and strict equality (===). It's important to understand the differences between them.

<br>
<br>
<b>Day 23-24/100</b><br>
<b>JavaScript Loops and Iteration</b><br>
- for loop <br>
- while loop <br>
- do...while loop <br>
- for...in loop <br>
- for...of loop <br><br>


<b>Day 25-26/100</b><br>
<b>Ecommerce with MERN stack</b><br>
Error Handling <br>
- Mongoose validation error <br>
- Mongoose ID error

<br><br>
<b>Day 27/100</b><br>
<b>Ecommerce with MERN stack</b><br>
Build Search Functionality for my MERN stack project <br>
![Screenshot_5](https://github.com/sam0560/100DaysOfCode/assets/64938042/8ce716a1-8da2-47ba-8582-0ee9b42ab98b)
![Screenshot_4](https://github.com/sam0560/100DaysOfCode/assets/64938042/1265466d-e777-48ec-a968-bb3bcd8dbb0f)

<br><br>
<b>Day 28/100</b><br>
<b>Control Flow</b><br>
Condtional Statement<br>
- if...else<br>
![ifelse](https://github.com/sam0560/100DaysOfCode/assets/64938042/6df6ea14-3a96-4345-b5ca-a350b54b4d04)

<br><br>
- else...if<br>
  ![elseif](https://github.com/sam0560/100DaysOfCode/assets/64938042/c95c4504-80ac-463a-acf5-528907d05091)

<br><br>
<b>Day 29/100</b><br>
<b>Control Flow</b><br>
Switch Case<br>
The `switch` statement evaluates an expression, matches it against case clauses, and executes statements after the first matching case. It continues execution until a `break` statement is encountered. If no case matches, it jumps to the `default` clause.<br>
![switchCase](https://github.com/sam0560/100DaysOfCode/assets/64938042/70d16b95-a24a-4089-8752-521f0fec59ae)


<br><br>
<b>Day 30-32/100</b><br>
<b>Expression & Operators</b><br>
Expressions are building blocks that produce values, and operators are symbols that perform operations on these values. They form the foundation for JavaScript's ability to perform calculations, comparisons, and other actions in a program.<br>

Eg. of Operators<br>
- Assigment operator<br>
- Comparison operator<br>
- Aritmetric operator<br>

<br><br>
<b>Day 33-35/100</b><br>
- Continued to make updates for my plant ecommerce platform <br>
- Built an email template<br>

https://github.com/sam0560/100DaysOfCode/assets/64938042/bd3f0622-253b-427e-873d-a93c5f4ab788

<br><br>
<b>Day 36-37/100</b><br>
<b>Javascript Function</b><br>
- Declaration of function
    - Tranditional function expression - using function keyword
    - Arrow function expression
- Built-in methods

Note: <br>
When to Use Arrow Functions:<br>
-	Use arrow functions for short, concise functions, especially when passing them as arguments to other functions (e.g., array methods like map, filter, reduce).
-	Use arrow functions when you want to retain the lexical scope of this, especially in callback functions within classes or objects.

When to Use Traditional Functions:<br>
-	Use traditional functions when you need the function to have its own `this` context or when defining object methods.
-	Use traditional functions when you need the arguments object or plan to use the function as a constructor.

<b>Day 38-40/100</b><br>
<b>MERN stack Ecommerce website</b><br>
It has been a tough week combining dev with work and writing some exams. But in the end, it is a win for the week.
Added
- Filter and pagination to my Ecommerce web app
  ![Screenshot_7](https://github.com/sam0560/100DaysOfCode/assets/64938042/97c7eb6e-3e7c-4acd-96bc-f4cd94590fba)
![Screenshot_6](https://github.com/sam0560/100DaysOfCode/assets/64938042/b72105ca-1631-44d0-b2ac-92ed88c4a1bb)
![Screenshot_5](https://github.com/sam0560/100DaysOfCode/assets/64938042/57149d59-732d-4959-8d99-a160f44f5480)
![Screenshot_4](https://github.com/sam0560/100DaysOfCode/assets/64938042/9be273ff-4c83-4a28-a63b-8fcc45ce9b98)

<br><br>
<b>Day 41-43/100</b><br>
<b>LINUX</b>
Exploring some linux commands
- which
- free
- top
- li -r
- who
  
<br><br>
<b>Day 44-46/100</b><br>
Building a project for tech;<br>
- Blogging <br>
- News and article <br>
- posting and watching tech video
  
![instatech](https://github.com/sam0560/100DaysOfCode/assets/64938042/87e3e45d-7587-476c-9d8c-0a15525fba23)

<br><br>
<b>Day 46-49/100</b><br>
Updating my tech website for;<br>
- Blogging <br>
- News and article <br>
- posting and watching tech video<br><br>

using nextjs

<br><br>
<b>Day 50-51/100</b><br>
Devrloped a transactional email template using html table to support majority of email clients


<br><br>
<b>Day 52-53/100</b><br>
Introduction to Laravel <br>
picking up from where I stopped in Laravel.

<br><br>
<b>Day 54-56/100</b><br>
Building upon my tech content web app<br>

<br>
<b>Day 57/100</b><br>
Creating user module in nodejs and installing nodemailer, jwt, and validator<br>

![Screenshot_6](https://github.com/sam0560/100DaysOfCode/assets/64938042/f7d2dc62-fbae-4993-bede-a3476709abc8)


<br><br>
<b>Day 58-60/100</b><br>
- Fetched news data from News api and query the search with technology keyword<br>
- Added next configurarion host names to map to allow access to some unknown domains<br>

<br><br>
<b>Day 60-63/100</b><br>
Applied for entry level or junior frontend roles<br><br>

Hopefully i won't get "unfortunately we will not be moving forward with your application"  😁

<br><br>
<b>Day 64-65/100</b><br>
Fixed responsive view on my project 

<br><br>
<b>Day 66-70/100</b><br>
Tough week but I managed to put in some extra work.

what I did;
Fetched news from newsapi, blogs from dev.to & tech videos from YouTube api

<br><br>
<b>Day 71-73/100</b><br>
Fixing bugs upon bugs.
<br>
The dark mode doesn't look bad at all

<br><br>
<b>Day 74-78/100</b><br>
Having some terrible network experience over the week but it also has given me some time improve upon my portfolio website and also make some updates on my side project.

<br><br>
<b>Day 79/100</b><br>
Modification of my portfolio website
kaysam-dev.vercel.app

![image](https://github.com/sam0560/100DaysOfCode/assets/64938042/08e53d47-5c21-4f30-afca-8caa0d714bbf)

<br><br>
<b>Day 80-81/100</b><br>
Planning phase for university final year project. 
Starting from user story to flow chart, Database planning, Tech stack seletion and UI designing. All on paper 📜

<br><br>
<b>Day 82-85/100</b><br>
I have been working on a project to locate Pharmacies in Accra metropolis. And so far there is enough progress.
![Screenshot_7](https://github.com/sam0560/100DaysOfCode/assets/64938042/6d9365bf-8073-4b31-b6a1-7ca8bee15f2f)

<br><br>
<b>Day 86-100 of 100</b><br>
Final work
