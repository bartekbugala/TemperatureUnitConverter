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

// declare input variables
let tempC;
let tempF;

// regex const declarations
const numExp = /^[-0-9]+$/;

// functions

// round given decimal paces (default value is 2)
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

// TO DO
function returnIfNumber(input){
    if (isNaN(input)) {
        return 'wrong input';
    } 
    return input    
};

function alertIfNotNumber(input){
    if (isNaN(input)) {
        alert('Wrong input, please enter a number.');
    }
    return input
}

function tempMessage(tempC) {

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
    return msg;   
 }

// adding listeners (waiting for mouse click) to buttons

// @tempC
buttonTempToF.addEventListener('click', function () {

    // prompting for input @tempC
    tempC = alertIfNotNumber(returnIfNumber(window.prompt('Enter Temperature in Celsius degrees')));

    // Display Message With @tempC
    outputTempToF.innerHTML = 'Input in °C: ' + tempC + '<br><span>Output in °F: ' + returnIfNumber(celsiusToFahrenheit(tempC)) + '</span><br><br>' + tempMessage(tempC) + '<br><br>';
});

// @tempF
buttonTempToC.addEventListener('click', function () {

    // prompting for input @tempC
    tempF = window.prompt('Enter Temperature in Fahrenheit degrees');
    // declaration of iteration variable

    // Display Message With @tempF
   
    outputTempToC.innerHTML = 'The given temperature in Celsius degrees: ' + fahrenheitToCelsius(tempF) + '!' + '<br><br>' + tempMessage(fahrenheitToCelsius(tempF)) + '<br><br>';
});
