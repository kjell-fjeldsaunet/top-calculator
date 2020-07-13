//----Set variables----
//----Functions----
function add(arg1, arg2) {
    return arg1 + arg2;
};

function subtract(arg1, arg2) {
    return arg1 - arg2;
};

function multiply(arg1, arg2) {
    return arg1 * arg2;
};

function divide(arg1, arg2) {
    return arg1 / arg2;
};

function operate(operator, num1, num2) {
    switch (operator) {
        case 'add':
            return (add(num1, num2));
        case 'subtract':
            return subtract(num1, num2)
        case 'multiply':
            return (add(num1, num2));
        case 'divide':
            return subtract(num1, num2)
    }
}