"use strict";
function add(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
const number1 = 6;
const number2 = 3;
const printResult = true;
const printPhrase = "Result is: ";
add(number1, number2, printResult, printPhrase);
