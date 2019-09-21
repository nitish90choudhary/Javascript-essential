/**
 * Different types of variables
 * 1. Global variables- if declared without var keywords
 * 2. Local variable - scope is limited to function
 * 3. Const variable- this is required to make constants
 * 4. Let - this keyword is used to make block scoped variables, smaller scope than var
 * 
 */

const TITLE = "TITLE is constant";

console.log(TITLE);

function logScope() {
    var localVar = 2;

    if (localVar) {
        var localVar = "I'am different";
        console.log("nested localVal : ", localVar);
    }

    console.log("logScope localVal : ", localVar);
}

logScope();
/**
 * OUTPUT 
 * nested localVal :  I'am different
 * logScope localVal :  I'am different
 */

function logScope1() {
    var localVar = 2;

    if (localVar) {
        let localVar = "I'am different"; //block scope
        console.log("nested localVal : ", localVar);
    }

    console.log("logScope1 localVal : ", localVar);
}

logScope1();
/**
 * OUTPUT 
 * nested localVal :  I'am different
 * logScope localVal :  2
 */

/**
 * Learning Objects now
 * 1. Creating objects with Object();
 * 2. Creating objects with constructor
 */
var course = new Object();

course.title = "JavaScript Essential Training";
course.instructor = "Morten Rand-Hendriksen"
course.level = 1
course.views = 0
course.published = true;
course.updateViews = function () {
    return ++course.views;
}

console.log("Object is :", course)

// 2nd way of creating

var course = {
    title: "JavaScript Essential Training",
    instructor: "Morten Rand-Hendriksen",
    level: 1,
    views: 0,
    published: true,
    updateViews: function () {
        return ++course.views;
    }
}
course.updateViews();
console.log(course);

//Create object constructor
function Course(title, instructor, level, views, published, updateViews) {
    this.title = title;
    this.instructor = instructor
    this.level = level;
    this.views = views;
    this.updateViews = function () {
        return ++this.views;
    }
}
//Arrays of objects
var courses = [
    new Course("JAvaScript Essentials", "Robert", 1, 17, true),
    new Course("Up and running with ECMA script", "ROn bulne", 1, 12, true)
]

console.log(courses[1].updateViews());

/**
 * Learning Closures 
 * Closure: Functions inside the functions which relies on the outside vars.
 * example: ems in CSS
 */

function doSomething() {
    var a = 4;
    var b = 7;

    function multiply() {
        var result = a * b;
        return result;
    }
    return multiply;
}
var theResult = doSomething();

console.log("Closures learning: ", theResult());

/**
 * Example of closures
 */

function giveMeEms(pixels) {
    var baseValue = 16;

    function doTheMath() {
        return pixels / baseValue;
    }
    return doTheMath;
}

var small = giveMeEms(12);
var medium = giveMeEms(18);
var large = giveMeEms(24);

console.log("Small size", small());
console.log("Medium size", medium());
console.log("Large size", large());

/**
 * Learning document.querySelector
 */
document.querySelector("#firstName").value ="Nitish Choudhary";
document.querySelector("div label").innerHTML = "My First NAme";