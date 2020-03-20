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

function addOne(aNumber) {
    if (aNumber === Infinity) {
        return Infinity
    } else if (aNumber) {
        return parseInt(aNumber) + 1;
    }
}

function isEven(aNumber) {
    if (parseInt(aNumber) % 2 === 0 && isNaN(parseInt(aNumber)) === false) {
        return true;
    } else{
        return false;
    }
}

function isIdentical(firstParam, secondParam) {
    return firstParam === secondParam;
}

function isEqual(firstParam, secondParam) {
    return firstParam == secondParam;
}

function or(firstParam, secondParam) {
    return firstParam || secondParam;
}

function and(firstParam, secondParam) {
    return firstParam && secondParam;
}

function concat(firstParam, secondParam) {
    return (firstParam.toString()) + (secondParam.toString())
}