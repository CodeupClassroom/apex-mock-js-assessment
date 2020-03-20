"use strict";

/**
 * Write your solutions here.
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 * If you don't know what an iffe is, don't worry about it :)
 *
 * This file is for defining the following functions. See README.md for more detail.
 * isTrue
 * isFalse
 * not
 * addOne
 * isEven
 * isIdentical
 * isEqual
 * or
 * and
 * concat
 */
//Exercise 1
function isTrue(param){
    return param === true;
}

//Exercise 2- Define a function named isFalse that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.

function isFalse(param){
    return param === false;
}

//Exercise 3- Define a function named not that takes in any input and returns the boolean opposite of the provided input.

function not(param){
    return !param;
}

//Exercise 4- Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.
function addOne(param){
    return parseInt(param) + 1;
}
//Can't figure out how to pass infinity and get infinity

//