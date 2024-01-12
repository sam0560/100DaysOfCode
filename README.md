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


<b>Variable naming rules<b><br>
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
