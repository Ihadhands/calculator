function addition(a,b) {
    return a + b;
}

function subtraction(a,b) {
    return a - b;
}

function multiply(a,b) {
    return a * b;
}

function division(a,b) {
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        return addition(a,b);
    } else if (operator === '-') {
        return subtraction(a,b);
    } else if (operator === '/') {
        return division(a,b);
    } else if (operator === '*') {
        return multiply(a,b);
    } else {
        return 'Incorrect input';
    }
}