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
// re-do mock-js-assessment

// Problem 1 isTrue
function isTrue (arg) {
    return arg === true;
}

// Problem 2 isFalse
function isFalse (arg) {
    return arg === false;
}

// Problem 3 not
function not (arg) {
    return !arg;
}

// Problem 4 addOne
function addOne (aNumber) {
    if (aNumber === Infinity) {
        return Infinity;
    }
    aNumber = parseInt(aNumber)
    return aNumber + 1;
}
// for INFINITY, do NOT parseInt.

// Problem 5 isEven
function isEven (aNumber) {
    if (aNumber === false) {
        return false;
    }
    return aNumber % 2 === 0;
}

// Problem 6 isIdentical
function isIdentical (var1, var2) {
    if (var1 === var2) {
        return true;
    } else {
        return false;
    }
}

// Problem 7 isEqual
function isEqual (var3, var4) {
    if (var3 == var4) {
        return true;
    } else {
        return false;
    }
}

// Problem 8 or
function or (var1, var2) {
    return var1 || var2;
}

// problem 9 and
function and (var1, var2) {
    return var1 && var2;
}

// Problem 10 concat
function concat (arg1, arg2) {
    if (arg1 && arg2 === true){
        return "truetrue";
    }
    return arg1 + "" +  arg2;
}
// to make datatype change(?) use "" inside of concat.
// revisit it.

//
// // isTrue function
// function isTrue(aBoolean) {
//     return aBoolean === true;
// }
//
// // isFalse function
// function isFalse(aBoolean) {
//     return aBoolean === false;
// }
//
// // addOne function
// function addOne(aNumber) {
//     var parsedNumber = parseInt(aNumber)
//     if (aNumber === Infinity){
//         return Infinity;
//     } else{
//         return (parsedNumber + 1);
//     }
// }
// console.log(addOne(0));
// console.log(addOne(-5));
//
// // isIdentical function
// function isIdentical(param) {
//     if (param === param) {
//         return true;
//     } else if (param == param) {
//         return false;
//     }
// }
//
// // isEven function
// function isEven(aNumber) {
//     if (aNumber === false){
//         return false;
//     } else
//     return aNumber % 2 == 0;
// }
//
// // not function
// function not(param) {
//     if (param === "hello" || true) {
//         return false;
//     } else if (param === "" || 'null') {
//         return true;
//     } else if (param === isNaN) {
//         return true;
//     }
// }
//
// // or function
// function or(param) {
//     if (param == true) {
//         return true;
//     } else if (param == false) {
//         return false;
//     } else if (param === "hello" || "world") {
//         return "hello";
//     }
// }
//
// // isEqual function
// function isEqual(param) {
//
// }
//
// // and function
// function and(param) {
//     var oneAnd = true;
//     var twoAnd = true;
//     if (param === "hello" || "world") {
//         return "world";
//     } else if (param == true && oneAnd === twoAnd) {
//         return true;
//     } else if (param == false) {
//         return false;
//     }
// }
//
// // concat function
// function concat(param) {
//
// }
