"use strict";

//SETUP
let input;
let inputtype;
let option;
let output;
let button = document.querySelector("button");
let inputbox = document.querySelector("#input");
let outputbox = document.querySelector("#output");
let optionsbox = document.querySelector("#options");

//EVENT LISTENERS
button.addEventListener("click", readInput);
inputbox.addEventListener("click", clearInput);
optionsbox.addEventListener("click", clearOutput);


//FUNCTIONS
function readInput() {
    input = document.querySelector("#input").value;
    console.log(input);
    checkInput();
}

//checking if the input is a first name, a full name, a filename, a password or else
function checkInput() {

    let firstLetter = input[0];

    if (!input.includes(" ") && !input.endsWith(".jpg") && !input.endsWith(".png")) {
        inputtype = "firstname"
    };
    if (input.includes(" ") && firstLetter.toUpperCase() === input[0] && !input.endsWith(".jpg") && !input.endsWith(".png")) {
        inputtype = "fullname"
    };
    if (!input.includes(" ") && input.endsWith(".jpg") || !input.includes(" ") && input.endsWith(".png")) {
        inputtype = "file"
    };
    if (input.includes()) {
        //how to check if it includes numbers and letters? or what makes it a password?
    };

    console.log(inputtype);
    readOption();
}

function readOption() {
    option = document.querySelector("#options").value;
    console.log(option);

    makeOutput();
}

function makeOutput() {

    if (option === "1" && inputtype === "firstname") {
        //Make the first character in a name uppercase, and the rest lowercase
        let uppercase = input.substring(0, 1).toUpperCase();
        let lowercase = input.substring(1).toLowerCase();
        output = uppercase+lowercase;
    };
    if (option === "2" && inputtype === "fullname") {
        //Find the first name
        let firstname = input.substring(input[0], input.indexOf(" "));
        output = firstname;
    };
    if (option === "3" && inputtype === "fullname") {
        //Find the length of the first name
        let firstname = input.substring(input[0], input.indexOf(" "));
        output = firstname.length;
    };
    if (option === "4" && inputtype === "fullname") {
        //Find the middle name start and end position, and the middle name itself in a full name string

    };
    if (option === "5" && inputtype === "filename") {
        //Check if filename is .jpg or .png
    };
    if (option === "6" && inputtype === "password") {
        //Hide a password with the correct number of *s
        let password = "";
        password = password.padEnd(input.length, "*");
        output = password;
    };
    if (option === "7") {
        //Make the third character uppercase
        let uppercase = input.substring(2, 3).toUpperCase();
        let lowercase1 = input.substring(0, 2).toLowerCase();
        let lowercase2 = input.substring(3).toLowerCase();
        output = lowercase1+uppercase+lowercase2;
    };
    if (option === "8") {
        //Make a character uppercase, if it follows a space or a hyphen

    };

    printOutput();
}

function printOutput() {
    outputbox.value = output;
}

function clearInput() {
    input = "";
    inputtype = "";
    output = "";
    outputbox.value = "";
}

function clearOutput() {
    output = "";
    outputbox.value = "";
}