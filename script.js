"use strict";

//SETUP
let input;
let inputtype;
let option;
let output;
let button = document.querySelector("button");
let inputbox = document.querySelector("#input");

//EVENT LISTENERS
button.addEventListener("click", readInput);
button.addEventListener("click", checkInput);
button.addEventListener("click", readOption);
button.addEventListener("click", printOutput);
button.addEventListener("click", makeOutput);
inputbox.addEventListener("click", clearInput);


//FUNCTIONS
function readInput() {
    input = document.querySelector("#input").value;
    console.log(input)
}

//checking if the input is a first name, a full name, a filename, a password or else
function checkInput() {

    let firstLetter = input[0];


    if (!input.includes(" ") && firstLetter.toUpperCase() === input[0] && !input.endsWith(".jpg") && !input.endsWith(".png")) {
        inputtype = "firstname"
    };
    if (input.includes(" ") && firstLetter.toUpperCase() === input[0] && !input.endsWith(".jpg") && !input.endsWith(".png")) {
        inputtype = "fullname"
    };
    if (!input.includes(" ") && input.endsWith(".jpg") || !input.includes(" ") && input.endsWith(".png")) {
        inputtype = "file"
    };
    //how to check if it includes numbers and letters
    if (input.includes()) {

    };

    console.log(inputtype)
}

function readOption() {
    option = document.querySelector("#options").value;
    console.log(option);
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

function clearInput() {
    input = "";
    inputtype = "";

    console.log(input, inputtype);
}