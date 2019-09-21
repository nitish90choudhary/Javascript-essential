//Browser level events- load, error, online/offline, window resize etc.
//DOM level events - Content interaction- click, focus, submit, blur,
//Media events -play
//progress events
//CSS transition events
const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e, current) {
    e.preventDefault();
    current.innerHTML == "Book Now!" ? CTA.innerHTML = "Ooops!" : CTA.innerHTML = "Book Now!";
    ALERT.classList.toggle("hide");
}

//Get the element and bind the event to it
// this works fine when we have have one event for on element
//CTA.onclick = reveal;
//CTA.onclick = console.log("The button was clicked");

//Multiple event can be handled by using event listner
//event-bind to function

//CTA.addEventListener("click", reveal, false); //true when using bubbling
CTA.addEventListener("click", function () {
    console.log("I am clicked");
}, false);

//Passing arguments to function , passed to event listeners
// make anonymous functions and pass args from there

CTA.addEventListener("click", function (e) {
    reveal(e, this);
}, false);