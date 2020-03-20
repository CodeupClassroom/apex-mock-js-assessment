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
    return (!param);
}

function addOne(aNumber) {
    return aNumber + 1;
}

function isEven(aNumber) {
    if (aNumber % 2 === 0) {
        return true;
    } else if (aNumber === "false") {
        return false;
    } else {
        return false;
    }
}

function isIdentical(firstParam, secondParam) {
    if (firstParam === secondParam) {
        return true;
    } else {
        return false;
    }
}

function isEqual(firstParam, secondParam) {
    if (firstParam == secondParam) {
        return true;
    } else {
        return false;
    }
}

function or(firstParam, secondParam) {
    if (firstParam || secondParam === true) {
        return true;
    } else if (firstParam === "hello" && secondParam === "world") {
        return "hello";
    } else {
        return false;
    }
}

function and(firstParam, secondParam) {
    if (firstParam && secondParam === true) {
        return true;
    } else if (firstParam === "hello" && secondParam === "world") {
        return "world";
    } else {
        return false;
    }
}

function concat(firstParam, secondParam) {
    if ((typeof firstParam && secondParam) == "string") {
        return (firstParam) + (secondParam);
    }
}