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

function addOne(x) {
    return (+x + 1);
}


function isEven(x) {
    if (x % 2 === 0) {
        return true;
    }else {
        return false;
    }
}

function isIdentical (x1, x2) {
    if (x1 === x2) {
        return true;
    }else {
        return false;
    }
}


function isEqual (x1, x2) {
    if (x1 == x2) {
        return true;
    }else {
        return false;
    }
}

function or(x1, x2) {
    return x1 || x2 === true;
}

function and(x1, x2) {
    if (x1 && x2) {
        return true;
    } else {
        return false;
    }
}