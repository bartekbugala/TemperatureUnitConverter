'use strict';

let outputTempToF = document.getElementById('temp-to-f-output');
let outputTempToC = document.getElementById('temp-to-c-output');

outputTempToF.innerHTML = 'Click the button! to convert °C to °F!' + '<br><br>';
outputTempToC.innerHTML = 'Click the button! to convert °F to °C!' + '<br><br>';

let buttonTempToF = document.getElementById('temp-to-f-button');
let buttonTempToC = document.getElementById('temp-to-c-button');

// If second param decimal not set default is 2 
function round(num, decimal = 2) {
    let multiplier = Math.pow(10, decimal);
    return Math.round(num * multiplier) / multiplier;
};

function celsiusToFahrenheit(tempC) {
    let tempF = (tempC * 1.8) + 32;
    return round(tempF);
};

function fahrenheitToCelsius(tempF) {
    let tempC = (tempF - 32) / 1.8;
    return round(tempC);
};

function trimSpaceReplaceCommaWithDot(input) {
    input = input.replace(',', '.');
    input = input.trim();
    return input;
}

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

function returnNanIfEmptyOrNaN(input) {
    if (isNaN(input) || input === '') {
        return NaN;
    }
    return input;
};

function displayInHtmlElement(domElement,textToDisplay){
    domElement.innerHTML = domElement.innerHTML + '<br><hr>'+ textToDisplay +'<br><hr>';
}

buttonTempToF.addEventListener('click', function () {

    // (second parameter empty string '' is IE fallback)
    let tempC = window.prompt('Enter Temperature in Celsius degrees', '');
    
    tempC = trimSpaceReplaceCommaWithDot(tempC);

    if (tempC === null) {
        return;
    }

    tempC = trimSpaceReplaceCommaWithDot(tempC);

    if (isNaN(tempC) || tempC === "") {
        alert('Please enter a number');
        return;
    }

    let tempF = celsiusToFahrenheit(tempC);
    let tempMsg = returnTempMsg(tempC);
    let finalMsg = 'Input in °C: ' + tempC + '<br><span>Output in °F: ' + tempF + '</span><br><br>' + tempMsg;

    displayInHtmlElement(outputTempToF,finalMsg)
});



buttonTempToC.addEventListener('click', function () {

    // (second parameter empty string '' is IE fallback)
    let tempF = window.prompt('Enter Temperature in Fahrenheit degrees', '');
    
    if (tempF === null) {
        return;
    }

    tempF = trimSpaceReplaceCommaWithDot(tempF);

    if (isNaN(tempF) || tempF === "") {
        alert('Please enter a number');
        return;
    }

    let tempC = fahrenheitToCelsius(tempF);
    let tempMsg = returnTempMsg(tempC);

    let finalMsg = 'Input in °F: ' + tempF + '<br><span>Output in °C:' + tempC + '</span><br><br>' + tempMsg;

    displayInHtmlElement(outputTempToC,finalMsg);
});