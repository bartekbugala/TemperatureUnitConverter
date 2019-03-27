'use strict';

// reference to div with greeter-output id
var output = document.getElementById('greeter-output');

// adding content to div
output.innerHTML = 'Click the button! I want to say hello!' + '<br><br>' + output.innerHTML;

// targeting button with greeter-button id
var button = document.getElementById('greeter-button');

// userName variable declaration
var userName;

// alphaExp const declaration
const alphaExp = /^[a-zA-Z]+$/;

// adding listener (waiting for mouse click) to button 
button.addEventListener('click', function () {
    
    // Checking if the user name is set
    if (typeof userName !== 'string') {
        userName = window.prompt('What is your name?');
    }
    // declaration of iteration variable
    var i = 5;
/*
        // Checking if input is consisting of letters


*/

    while ((!alphaExp.test(userName) || typeof userName !== 'string' || userName === '' || !isNaN(userName)) && i > 0) {
        // declaring const
        const triesString = 'Tries left: ';
        
        // Checking if input is not a string!
        if (typeof userName !== 'string') {
            userName = window.prompt('(Input: ' + typeof (userName) + ') ' + 'No Input! What is your real name?' + triesString + i);
        }
        // Checking if input is empty (no input)
        else if (userName === '') {
            userName = window.prompt('(Input: ' + typeof (userName) + ') ' + 'Empty field! What is your real name?' + triesString + i);
        }
        // Checking if input is a number (not isNaN)
        else if (!isNaN(userName)) {
            userName = window.prompt('(Input: ' + typeof (userName) + ' consisting of a number) ' + 'A Number? Are you an alien? What is your real name?' + triesString + i);
        }
        else if (!alphaExp.test(userName)) {
            userName = window.prompt('(Input: ' + typeof (userName) + ' containing non alphabetical characters) ' + 'Prohibited! No Injection hacks my Friend! What is your real name?' + triesString + i);
        }
        i--;
    }

    // If the iteration finished and tehre is still no input a value is assigned to userName variable
    if ((typeof userName !== 'string' || userName === '' || !isNaN(userName)) && i === 0) {
        userName = 'Stubborn Individual';
    }

    // Display Message With user name @userName
    output.innerHTML = 'Hello ' + userName + '!' + '<br><br>' + output.innerHTML;
});