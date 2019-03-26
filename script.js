'use strict';

// reference to div with greeter-output id
var output = document.getElementById('greeter-output');

// adding content to div
output.innerHTML = 'Click the button! I want to say hello!' + '<br><br>' + output.innerHTML;

var button = document.getElementById('greeter-button');

// userName variable declaration
var userName;

// adding listener (waiting for mouse click) to button 
button.addEventListener('click', function () {

// Checking if the user name is set
    if (typeof userName !== 'string') {
        userName = window.prompt('What is your name?');
    }
    // declaration of iteration variable
    var i = 5;
    while ((typeof userName !== 'string' || userName === '' || !isNaN(userName)) && i > 0) {
        var triesString = 'Tries left: ';
        if (typeof userName !== 'string') {
            userName = window.prompt('(Input: ' + typeof (userName) + ') ' + 'No Input! What is your real name?' + triesString + i);
        } else if (userName === '') {
            userName = window.prompt('(Input: ' + typeof (userName) + ') ' + 'Empty field! What is your real name?' + triesString + i);
        } else if (!isNaN(userName)) {
            userName = window.prompt('(Input: ' + typeof (userName) + ' consisting of a number) ' + 'A Number? Are you an alien? What is your real name?' + triesString + i);
        }
        i--;
    }

    if ((typeof userName !== 'string' || userName === '' || !isNaN(userName)) && i === 0) {
        userName = 'Mute Individual';
    }
 
    output.innerHTML = 'Hello ' + userName + '!' + '<br><br>' + output.innerHTML;
});