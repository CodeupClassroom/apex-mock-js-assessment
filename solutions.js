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


function isTrue(parameter) {
    return parameter === true;
}

function isFalse(parameter) {
    return parameter === false;
}


function not(input) {
    return !Boolean(input);
}




//need work here
function addOne(userNumber) {
    var parsedNumber = parseInt(userNumber)
        return parsedNumber + 1;
}




function isEven(aNumber) {
    if (aNumber === false) {
        return false
    } else {
        return aNumber % 2 === 0;
    }
}

function isIdentical(value1, value2) {
    return value1 === value2;
}

function isEqual(value1, value2) {
    return value1 == value2;
}


function or(value1, value2) {
    return value1 || value2;
}


function and(input1, input2) {
    return input1 && input2;
}


function concat(input1, input2) {
  return String(input1) + String(input2);
}


