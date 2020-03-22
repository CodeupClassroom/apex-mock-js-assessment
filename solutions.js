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

function isTrue(arg){
    return arg === true;
}

function isFalse(argument){
    return argument === false;
}

function not(arg){
    return !arg;
}

function addOne(aNumber){

    if(aNumber === Infinity){
        return Infinity;
    }

    return 1 + parseInt(aNumber);
}

function isEven(arg){

    if(arg === false){
        return false;
    }

    return (arg % 2) === 0;
}

function isIdentical(param1, param2){
    return param1 === param2;
}

function isEqual(param1, param2){
    return param2 == param1;
}

function or(param1, param2){
    return param1 || param2;
}

function and(param1, param2){
    return param1 && param2;
}

function concat(aString, anotherString){
    return aString + "" + anotherString;
}