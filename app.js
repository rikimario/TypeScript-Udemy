function add(n1, n2, showResult, phrase) {
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
}
var number1 = 6;
var number2 = 3;
var printResult = true;
var printPhrase = "Result is: ";
add(number1, number2, printResult, printPhrase);
