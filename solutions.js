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

function isTrue(param) {
    return param === true;
}

function isFalse(param) {
    return param === false;
}

function not(param) {
    return !param;
}

function addOne(number) {
    if (number === Infinity) {
        return Infinity
    } else if (number) {
        return parseInt(number) + 1;
    }
}

function isEven(number) {
    if (parseInt(number) % 2 === 0 && isNaN(parseInt(number)) === false) {
        return true;
    } else{
        return false;
    }
}

function isIdentical(param1, param2) {
    return param1 === param2
}

