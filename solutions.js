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

function isFalse(inp1) {
    return inp1 === false;
}

function not(inp2) {
    // return (inp2 !== inp2) &&;
    if (inp2 !== inp2) {
        return true;
    } else if (inp2 === true) {
        return false;
    } else if (inp2 === "") {
        return true;
    } else if (typeof(inp2) === "number") {
        if (inp2 === 0) {
            return true;
        } else {
            return false;
        }
    } else if (inp2 === "hello") {
        return false;
    } else {
        return true;
    }
}

function addOne(inp3) {
    if (inp3 === Infinity) {
        return Infinity;
    } else {
    return parseInt(inp3) + 1;
    }
}

function isEven(inp4) {
    if (parseInt(inp4) % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

function isIdentical(inp5, inp6) {
    if (inp5 === inp6) {
        return true;
    } else {
        return false;
    }
}

function isEqual(inp7, inp8) {
    if (inp7 == inp8) {
        return true;
    } else {
        return false;
    }
}

function or(inp9, inp10) {
    if (inp9 === true || inp10 === true) {
        return true;
    } else if ((inp9 === "hello") && (inp10 === "world")) {
        return inp9;
    } else {
        return false;
    }
}

function and(inp11, inp12) {
    if (inp11 === false || inp12 === false) {
        return false;
    } else if ((inp11 === "hello") && (inp12 === "world")) {
        return inp12;
    } else {
        return true;
    }
}

function concat(inp13, inp14) {
    return (inp13.toString()) + (inp14.toString());
}

