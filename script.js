'use strict';

// get divs by ID
let outputTempToF = document.getElementById('temp-to-f-output');
let outputTempToC = document.getElementById('temp-to-c-output');

// add content to divs
outputTempToF.innerHTML = 'Click the button! If you want to convert °C to °F!' + '<br><br>';
outputTempToC.innerHTML = 'Click the button! If you want to convert °F to °C!' + '<br><br>';

// get buttons by id
let buttonTempToF = document.getElementById('temp-to-f-button');
let buttonTempToC = document.getElementById('temp-to-c-button');

// regex const declarations
const numExp = /^[-0-9]+$/;

// round given decimal places (if not set default value is 2)
function round(num, decimal = 2) {
    let multiplier = Math.pow(10, decimal);
    return Math.round(num * multiplier) / multiplier;
}
// convert celsius to Fahrenheit
function celsiusToFahrenheit(tempC) {
    let tempF = (tempC * 1.8) + 32;
    return round(tempF);
}
// convert Fahrenheit to Celsius
function fahrenheitToCelsius(tempF) {
    let tempC = (tempF - 32) / 1.8;
    return round(tempC);
}

// checks if number, returns number or message (default value - 'wrong input')
function returnIfNumber(input, value = "wrong input"){
    if (isNaN(input)||input === "") {
        return value;
    } 
    return input    
};

function alertIfNotNumber(input){
    if (isNaN(input)) {
        alert('Wrong input, please enter a number.');
    }
    return input
}

// Returns message accoding to degrees C (@tempC) 
function returnTempMsg(tempC) {

    let msg;
    if (tempC <= 0){
     msg = 'Water freezes, You should wear winter clothing!';
    }
    else if ( tempC > 0 && tempC < 10){
     msg = 'Its cold, wear a hat!';
    }
    else if ( tempC >= 10 && tempC < 18){
     msg = 'You can wear a coat! It is getting warmer!';
    }
    else if ( tempC >= 18 && tempC <= 28){
     msg =  'It is definately summer, or you are in your apartament';
    }
    else if ( tempC > 28 && tempC < 100){
     msg =  'I\'s getting hot in here! THE ROOF IS ON FIRE';
    }
    else if ( tempC >= 100 && tempC < 525){
     msg =   'Water is boiling or evaporates. You are dead or wear a firefighter suit!';
    }
    else if ( tempC >= 525 && tempC < 5505){
     msg =  'Black hole sun won\'t you come!';
    }
    else if (tempC >= 5505){
     msg =  'Most probably you can\'t recieve this message';
    }
    else (
        msg = 'No message.'
    )
    return msg;   
 }

// @tempC - Button listener - convert celsius to fahrenheit
buttonTempToF.addEventListener('click', function () {
    let promptTempToF = window.prompt('Enter Temperature in Celsius degrees','');
    let tempC = alertIfNotNumber(returnIfNumber(promptTempToF));
    let tempFConverted = returnIfNumber(celsiusToFahrenheit(tempC));
    // Message according to temperature
    let tempMsg = returnTempMsg(tempC);
    // Display Message With @tempC
    outputTempToF.innerHTML = 'Input in °C: ' + tempC + '<br><span>Output in °F: ' + tempFConverted + '</span><br><br>' + tempMsg + '<br><br>';
});

// @tempF - Button listener - conversion to Celsius
buttonTempToC.addEventListener('click', function () {
    // prompt window (second value for IE prevent 'undefined')
    let promptTempToC = window.prompt('Enter Temperature in Celsius degrees','');
    // check input of prompt window and assign to tempF variable
    let tempF = alertIfNotNumber(returnIfNumber(promptTempToC));
    // Temperature in F after conversion
    let tempCConverted = returnIfNumber(fahrenheitToCelsius(tempF));
    // Message according to temperature
    let tempMsg = returnTempMsg(convertedToTempC);
    // Display Message With @tempF
    outputTempToC.innerHTML = 'Input in °C: ' + tempF + '<br><span>Output in °F: ' + tempCConverted + '</span><br><br>' + tempMsg + '<br><br>';
});
