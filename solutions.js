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

//function isTrue()
function isTrue(param) {
    return param === true;
}

//function isFalse()
function isFalse(value) {
    if (value === false) {
        return true;
    } else {
        return false;
    }
}

//Define a function named not that takes in any input and returns the boolean opposite of the provided input

function not(input) {
    return !input
}

//Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.

// function addOne(input) {
//     if (!isNaN(input)) {
//         return ((input) + 1);
//     } else if (isNaN(input)){
//         return parseInt((input)+1);
//     }
// }
//
//Define a function named isEven that takes in a single input. If the input is an even number or a string containing an even number, return true. Any other input should return false for the output

function isEven(input){
    if (input % 2 ===0){
        return true;
    } else {
        return false;
    }
}