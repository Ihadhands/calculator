const btn = document.querySelector('.calculator-buttons');
const matches = document.querySelectorAll('div');
const calcScreen = document.querySelector('.screen');
console.log(matches);
console.log(btn);



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

/*function display() {
    calcScreen.textContent = calculator;
}*/

btn.addEventListener('click', function(e) {
    if (e.target.classList.contains('operator')) {
        operator = e.target.value;
        console.log(operator);
    }
    if (e.target.classList.contains('equals')) {
        console.log('equals', e.target.value);
    }
    if (e.target.classList.contains('decimal')) {
        console.log('decimal', e.target.value);
    }
    if (e.target.classList.contains('all-clear')) {
        console.log('all-clear', e.target.value);
    }
    if (e.target.classList.contains('delete')) {
        console.log('delete', e.target.value);
    }
    if (e.target.classList.contains('number')) {
        inputNumber(e.target.value);
        firstInt === '' ? firstInt = e.target.value : firstInt += e.target.value;
    }
});

function inputNumber(num) {
    return calcScreen.textContent === '0' ? calcScreen.textContent = num : calcScreen.textContent += num;
}

let operator = '';
let firstInt = '';
let secondInt = '';


