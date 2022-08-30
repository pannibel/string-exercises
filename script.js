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
    let numbers = ["0","1","2","3","4","5","6","7","8","9"]

    if (!input.includes(" ") && !input.endsWith(".jpg") && !input.endsWith(".png")) {
        inputtype = "firstname"
    };
    if (input.includes(" ") && firstLetter.toUpperCase() === input[0] && !input.endsWith(".jpg") && !input.endsWith(".png")) {
        inputtype = "fullname"
    };
    if (!input.includes(" ") && numbers.some(number => input.includes(number)) && !input.endsWith(".jpg") || !input.includes(" ") && numbers.some(number => input.includes(number)) && !input.endsWith(".png")) {
        //how to check if it includes numbers and letters? or what makes it a password?
        inputtype = "password"
    };
    if (!input.includes(" ") && input.endsWith(".jpg") || !input.includes(" ") && input.endsWith(".png")) {
        inputtype = "filename"
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
        let middlename = input.substring(input.indexOf(" ") +1, input.lastIndexOf(" "));
        output = middlename;
    };
    if (option === "5" && inputtype === "filename") {
        //Check if filename is .jpg or .png
        let filetype = input.slice(-4);
        output = "File is " +filetype;
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
        //For now it only finds the first space and hyphen
        //Using something like foreach
        let afterspace = input.substring(input.indexOf(" ")+1);
        let afterhyphen = input.substring(input.indexOf("-")+1);

        if (input.includes(" ")) {
            output = input.replaceAll(afterspace[0], afterspace[0].toUpperCase());
        };
        if (input.includes("-")) {
            output = input.replaceAll(afterhyphen[0], afterhyphen[0].toUpperCase());
        }
        if (input.includes("-") && input.includes(" ")) {
            output = afterall;
        }
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