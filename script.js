"use strict";

//SETUP
let input;
let inputtype;
let option;
let output;
let button = document.querySelector("button");

//EVENT LISTENERS
button.addEventListener("click", readInput);
button.addEventListener("click", readOption);
button.addEventListener("click", printOutput);
button.addEventListener("click", makeOutput);

//FUNCTIONS
function readInput() {
    input = document.querySelector("#input").value;
    console.log(input)
}

function readOption() {
    option = document.querySelector("#options").value;
    console.log(option);
}

//checking if the input is a first name, a full name, a filename, a password or else
function checkInput() {
    if (!input.includes(" ")) {
        inputtype = "firstname"
    };
    if (input.includes(" ")) {
        inputtype = "fullname"
    };
    if (input.endsWith(".jpg", ".png")) {
        inputtype = "file"
    };
    //how to check if it includes numbers and letters
    if (input.includes()) {

    };

    console.log(inputtype)
}

function makeOutput() {

    if (option === 1) {
        
    };
    if (option === 2) {

    };
    if (option === 3) {

    };
    if (option === 4) {

    };
    if (option === 5) {

    };
    if (option === 6) {

    };
    if (option === 7) {

    };
    if (option === 8) {

    };
}

function printOutput() {
    console.log(output);

}