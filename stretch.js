// Stretch Goals
//
// After you have completed the requirements, create a new file called stretch.js and practice more with closures. There are no tests for these problems.
//
// See if you can complete one or more of the following challenges:
//
//     Predict the output of the code below and explain why this is the output using what you learned today.
// When you're ready for answers, view an explanation
// [here](https://www.coderbyte.com/algorithm/3-common-javascript-closure-questions
//
// (function(){
//   var a = b = 3;
// })();
// console.log("a defined? " + (typeof a !== 'undefined'));
// console.log("b defined? " + (typeof b !== 'undefined'));

//
//     Write a function that would allow you to do this using a closure.
// (This is another interview question we've seen before -
// when you're ready for answers, view an explanation here).
//
// var addSix = createBase(6);
// addSix(10); // returns 16
// addSix(21); // returns 27
//
//     Research the differences between functional programming and object oriented programming.
// Then, describe the pros and cons of functional programming vs object-oriented programming.
// This is a common interview question and great practice!

Functional programming is used to write the function as having statements to execute a 
particular task for the application. Each small function does its part and only its part.
The function can be easily invoked and reused at any point.
This kind of programing works best when you are not using much mutable data and
it can be difficult to convert real world situations to pure data.

Object-oriented programming uses objects to represent a set of data.
It is able to hide data while still accessing some of it.
It tends to be not very reusable and as well as more complex.
