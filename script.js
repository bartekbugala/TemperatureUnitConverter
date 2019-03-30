'use strict';

// Define bindings as divs from DOM by Id
let outputTempToF = document.getElementById('temp-to-f-output');
let outputTempToC = document.getElementById('temp-to-c-output');

// Assign string contents to divs
outputTempToF.innerHTML = 'Click the button! If you want to convert °C to °F!' + '<br><br>';
outputTempToC.innerHTML = 'Click the button! If you want to convert °F to °C!' + '<br><br>';

// Define bindings of buttons from DOM by Id
let buttonTempToF = document.getElementById('temp-to-f-button');
let buttonTempToC = document.getElementById('temp-to-c-button');

// Function to round float number (@num, @decimal places (if not set defaul is 2)
function round(num, decimal = 2) {
    let multiplier = Math.pow(10, decimal);
    return Math.round(num * multiplier) / multiplier;
};

// Function to convert Celsius to Fahrenheit (@tempC - in Celsius (number))
function celsiusToFahrenheit(tempC) {

    // Validate input if wrong display substitute value  
    tempC = returnIfNumber(tempC);
    
    // Alert if wrong input Before conversion
    if (isNaN(tempC)) {
        alertIfNotNumber(tempC);
        return tempC;
    }

    let tempF = (tempC * 1.8) + 32;
    return round(tempF);
};

// Function to convert Fahrenheit to Celsius (@tempF - in Fahrenheit (number))
function fahrenheitToCelsius(tempF) {
    
    // Validate input if wrong display substitute value 
    tempF = returnIfNumber(tempF);

    // Alert if wrong input Before conversion
    if (isNaN(tempF)) {
        alertIfNotNumber(tempF);
        return tempF;
    }
    
    let tempC = (tempF - 32) / 1.8;
    return round(tempC);
};

// Function to check if number, return number or message (@input, @ value (default value - 'wrong input'))
function returnIfNumber(input) {
    if (input === "" || input === "no input") {
        return "no input";
    } else if (isNaN(input) && (input !== "" || input !== "no input")) {
        return "wrong input"
    }

    return input;
};

// Function to display alert if not a number (@input)
function alertIfNotNumber(input) {
    if (input === "" || input === "no input") {
        alert('No input, please enter a number');
    } else if (isNaN(input)) {
        alert('Wrong input, please enter a number.');
    }
    return input;
};

// Function to Return message according to temperature range in C degrees (@tempC) 
function returnTempMsg(tempC) {

    let msg;
    if (tempC <= 0) {
        msg = 'Water freezes, You should wear winter clothing!';
    } else if (tempC > 0 && tempC < 10) {
        msg = 'Its cold, wear a hat!';
    } else if (tempC >= 10 && tempC < 18) {
        msg = 'You can wear a coat! It is getting warmer!';
    } else if (tempC >= 18 && tempC <= 28) {
        msg = 'It is warm';
    } else if (tempC > 28 && tempC < 100) {
        msg = 'I\'s getting hot!';
    } else if (tempC >= 100 && tempC < 525) {
        msg = 'Water is boiling or evaporates.';
    } else if (tempC >= 525 && tempC < 5505) {
        msg = 'Fire!';
    } else if (tempC >= 5505) {
        msg = 'Most probably you can\'t recieve this message';
    } else(
        msg = 'No message.'
    )
    return msg;
};

// Add button listener - convert Celsius to Fahrenheit (@tempC - prompt input)
buttonTempToF.addEventListener('click', function () {

    // Define binding of prompt window with string message (second parameter IE fallback)
    let promptTempToF = window.prompt('Enter Temperature in Celsius degrees', '');

    // Remove whitespaces
    promptTempToF = promptTempToF.trim();

    // Replace commas with dots
    promptTempToF = promptTempToF.replace(',', '.');

    // Loop waiting for input other than cancel (null)
    while (promptTempToF !== null) {

        // Define binding of temperature from prompt after validation
        let tempC = returnIfNumber(promptTempToF);

        // Define binding of converted temperature
        let tempF = celsiusToFahrenheit(tempC);

        // Define binding of message according to given temperature
        let tempMsg = returnTempMsg(tempC);

        // Display final message
        outputTempToF.innerHTML = 'Input in °C: ' + tempC + '<br><span>Output in °F: ' + tempF + '</span><br><br>' + tempMsg + '<br><br>';

        // Break out of loop to end prompt window after input
        break;
    }
});

// Add button listener - convert Fahrenheit to Celsius (@tempF - prompt input)
buttonTempToC.addEventListener('click', function () {

    // Define binding of prompt window with string message (second parameter IE fallback)
    let promptTempToC = window.prompt('Enter Temperature in Fahrenheit degrees', '');

    // Remove whitespaces
    promptTempToC = promptTempToC.trim();

    // Replace commas with dots
    promptTempToC = promptTempToC.replace(',', '.');

    // Loop waiting for input other than cancel (null)
    while (promptTempToC !== null) {

        //  Define binding of temperature from prompt after validation
        let tempF = returnIfNumber(promptTempToC);

        //  Define binding of temperature converted to Celsius
        let tempC = fahrenheitToCelsius(tempF);

        //  Define binding of message according to given temperature
        let tempMsg = returnTempMsg(tempC);

        // Display final message
        outputTempToC.innerHTML = 'Input in °F: ' + tempF + '<br><span>Output in °C: ' + tempC + '</span><br><br>' + tempMsg + '<br><br>';

        // Break out of loop to end prompt window after input
        break;
    }
});