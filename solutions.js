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


function isTrue(aBoolean) {
    return aBoolean === true;
}

function isFalse(aBoolean) {
    return aBoolean === false;
}

// addOne function
// var aNumber = parseInt(aNumber);
function addOne(aNumber) {
    return (aNumber + 1);
}
//should return -4 when passed "-5"
// should return 1 when passed "0"
// able to pass "STRING" and number in function.
console.log(addOne(0));
console.log(addOne(-5));

function isEven(aNumber) {
    return aNumber % 2 == 0;
}