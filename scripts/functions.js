/**
 * There are three types of functions
 * 1. Named functions
 * 2. Anonymous functions- they don't have any name
 * 3. Immediately invoked functions
 */

//Anonymous Functions
var theBiggest = function (a, b) {
    var result;
    a > b ? result = ["a", a] : result = ["b", b];
    return result;
}
console.log("Anonymous functions", theBiggest(5 / 7, 7 / 9));

//Immediately invoked functions
var theBiggest1 = (function (a, b) {
    var result;
    a > b ? result = ["a", a] : result = ["b", b];
    return result;
})(4, 7)
console.log("Immediately invoked functions : ", theBiggest1);