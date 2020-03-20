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
//Exercise 1- Define a function named isTrue that takes in any input and returns true if the input provided is exactly equal to true in value and data type.
function isTrue(param){
    return param === true;
}

//Exercise 2- Define a function named isFalse that takes in a value and returns a true if and only if the provided input is equal to false in both type and value.

function isFalse(param){
    return param === false;
}

//Exercise 3- Define a function named not that takes in any input and returns the boolean opposite of the provided input.

function not(param){
    return !param;
}

//Exercise 4- Define a function named addOne that takes in a single input. If the input is a number or a numeric string, return the value plus one.
function addOne(param){
    return parseFloat(param) + 1;
}
//Can't figure out how to pass infinity and get infinity. Answer was to change parseInt() to parseFloat().

//Exercise 5- Define a function named isEven that takes in a single input. If the input is an even number or a string containing an even number, return true. Any other input should return false for the output.

function isEven(input){
    if (input === false){
        return false;
    }
    return (input % 2) === 0;


}

//Exercise 6- Define a function named isIdentical that takes in two input arguments. If each input is equal both in data type and in value, then return true. If the values are not the same data type or not the same value, return false.

function isIdentical(param1, param2){
    return param1 === param2;
}

//Exercise 7- Define a function named isEqual that takes in two input arguments. If each argument is equal only in value, then return true. Otherwise return false.

function isEqual(param1, param2){
    return param1 == param2;
}

//Exercise 8
function or(param1, param2){
    return param1 || param2;
}

//Exercise 9
function and(param1, param2){
    return param1 && param2;
}

//Exercise 10
function concat(aString, anotherString){
    return aString + "" + anotherString;
}
