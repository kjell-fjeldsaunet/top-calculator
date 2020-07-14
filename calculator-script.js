//----Get DOM elements----
const historyScreen = document.querySelector('#history-screen');
const currentScreen = document.querySelector('#current-screen');
const currentValueDisplay = document.querySelector('.current-value-display')
const operatorDisplay = document.querySelector('.operator-display')
const buttons = document.querySelectorAll('.button')

//----Initialize global variables
let historyValue = '';
let currentValue = '0';
let operatorSymbol = '';
let currentOperation = '';

//----Populate DOM with values----
historyScreen.textContent = historyValue;
currentValueDisplay.textContent = currentValue;
operatorDisplay.textContent = operatorSymbol;

//----Add functions to buttons----
buttons.forEach(e => e.addEventListener('click', handleClick))

//----Functions----
function add(arg1, arg2) {
    return roundFourDecimals(arg1 + arg2);
};

function subtract(arg1, arg2) {
    return roundFourDecimals(arg1 - arg2);
};

function multiply(arg1, arg2) {
    return roundFourDecimals(arg1 * arg2);
};

function divide(arg1, arg2) {

    return roundFourDecimals(arg1 / arg2);
};

function operate(operator, num1, num2) {
    switch (operator) {
        case 'subtract':
            return subtract(num1, num2);
        case 'multiply':
            return (multiply(num1, num2));
        case 'divide':
            return divide(num1, num2);
        case 'equals':
            break
        default:
            return (add(num1, num2));
    }
}

function roundFourDecimals(num) {
    return Math.round(num * 10000) / 10000;
}

const operatorSymbols = {
    'add': '+',
    'subtract': '-',
    'multiply': 'x',
    'divide': '/',
    'equals': '=',
}

function handleClick(event) {
    const input = event.target.id;
    console.log(input)
    switch (input) {
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if (operatorSymbol == '=') {
                currentValue = '0';
                historyValue = '';
                operatorSymbol = '';
            }
            if (currentValue == '0') {
                currentValue = input;
            } else {
                currentValue += input;
            }
            break;
        case 'dot':
            if (operatorSymbol == '=') {
                currentValue = '0';
                historyValue = '';
                operatorSymbol = '';
            }
            if (currentValue.indexOf('.') == -1) {
                currentValue = currentValue += '.';
            }
            break;
        case 'add':
        case 'subtract':
        case 'multiply':
        case 'divide':
            historyValue = operate(currentOperation, +historyValue, +currentValue);
            currentValue = '0';
            currentOperation = input;
            operatorSymbol = operatorSymbols[input];
            break;
        case 'equals':
            operatorSymbol = operatorSymbols[input];
            currentValue = `${operate(currentOperation, +historyValue, +currentValue)}`;
            historyValue = currentValue;
            currentOperation = input;
            break;
        case 'ce':
            historyValue = ''
        case 'c':
            currentValue = '0';
            operatorSymbol = '';
            break;

    }
    historyScreen.textContent = historyValue;
    operatorDisplay.textContent = operatorSymbol;
    currentValueDisplay.textContent = currentValue;
}