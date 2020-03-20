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

// isTrue
function isTrue(param){
    return param === true;
}

// isFalse

function isFalse(param){
    return param === false;
}

// not PENDING

function not(param) {
    if (param !== false) {
        return false;
    }
}

// addOne PENDING
 function addOne(input) {
    return (parseInt(input)) + 1;
 }

 // isEven PENDING

function isEven(input) {
 if (input % 2 !== 1) {
     return true;
 } else if (input !== 0 || " ") {
     return false;
 }
}

// isIdentical

function isIdentical(first, second) {
    if (first === second) {
        return true;
    } else {
        return false;
    }
}

// isEqual

function isEqual(first, second) {
    if (first == second) {
        return true;
    } else {
        return false;
    }
}

// or

function or(one, two) {
 return (one || two);
}

// and

function and(op1, op2) {
    return (op1 && op2);
}

// concat PENDING

function concat(con1, con2) {
    if (con1 + con2) {
        return(con1 + con2);
    } else if ("con1" + "con2"); {
        return ("con1 " + "con2");
    }

}

