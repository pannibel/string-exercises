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

    if (!input.includes(" ") && !input.includes(".")) {
        inputtype = "firstname"
    };
    if (input.includes(" ") && firstLetter.toUpperCase() === input[0] && !input.includes(".")) {
        inputtype = "fullname"
    };
    if (!input.includes(" ") && numbers.some(number => input.includes(number))) {
        //how to check if it includes numbers and letters? or what makes it a password?
        inputtype = "password"
    };
    if (!input.includes(" ") && input.includes(".")) {
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

    if (option === "1") {
    //Make the first character in a name uppercase, and the rest lowercase

        if (inputtype === "firstname") {
            let uppercase = input.substring(0, 1).toUpperCase();
            let lowercase = input.substring(1).toLowerCase();
            output = uppercase+lowercase
        } else {
            output = "Incorrect input"
        }
    };

    if (option === "2")  {
    //Find the first name    

        if (inputtype === "fullname") {
            let firstname = input.substring(input[0], input.indexOf(" "));
            output = firstname;
        } else {
            output = "Incorrect input"
        }
    };

    if (option === "3") {
    //Find the length of the first name

        if (inputtype === "fullname") {
            let firstname = input.substring(input[0], input.indexOf(" "));
            output = firstname.length;
        } else {
            output = "Incorrect input"
        }
    };
        
    if (option === "4") {
    //Find the middle name start and end position, and the middle name itself in a full name string

        if (inputtype === "fullname") {
            let middlename = input.substring(input.indexOf(" ") +1, input.lastIndexOf(" "));
            output = middlename;
        } else {
            output = "Incorrect input"
        }
    };

    if (option === "5") {
    //Check if filename is .jpg or .png

        if (inputtype === "filename") {
            let filetype = input.slice(-4);
                if (filetype === ".jpg" || filetype === ".png") {
                output = "File is " +filetype;
                } else {
                    output = "Incorrect filetype"}
        } else {
            output = "Incorrect input"
        }
    };

    if (option === "6") {
    //Hide a password with the correct number of *s

        if (inputtype === "password") {
            let password = "";
            password = password.padEnd(input.length, "*");
            output = password;
        } else {
            output = "Incorrect input"
        }
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
        let previousChar;
        let currentChar;

        output = input.substring(0, 1).toUpperCase();
        for (let i = 1; i < input.length; i++) {
            previousChar = input[i-1];
            if (previousChar === " " || previousChar === "-") {
                currentChar = input[i].toUpperCase();
            } else {
                currentChar = input[i];
            }
            output += currentChar;
        }
    }

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