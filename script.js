const btn = document.querySelector('.calculator-buttons');
const matches = document.querySelectorAll('div');
const calcScreen = document.querySelector('.screen');
console.log(matches);
console.log(btn);

let operator = '';
let firstInt = 0;
let waitingForOperator = true;
let secondInt = '';

function addition(a,b) {
    console.log(a);
    console.log(b);
    return +a + +b;

}

function subtraction(a,b) {
    console.log(a)
    console.log(b)
    return a - b;
}

function multiply(a,b) {
    console.log(a, b);
    return a * b;
}

function division(a,b) {
    console.log(a);
    console.log(b);
    return a / b;
}

function operate(operator, a, b) {
    if (operator === '+') {
        firstInt = addition(a,b); 
        calcScreen.textContent = firstInt;
    } else if (operator === '-') {
        firstInt = subtraction(a,b); 
        calcScreen.textContent = firstInt;
    } else if (operator === '/') {
        firstInt = division(a,b); 
        calcScreen.textContent = firstInt;
    } else if (operator === '*') {
        firstInt = multiply(a,b); 
        calcScreen.textContent = firstInt;
    } else {
        return 'Incorrect input';
    }
}

btn.addEventListener('click', function(e) {
    if (e.target.classList.contains('operator')) {
        operator = e.target.value;
        waitingForOperator = false;
        calcScreen.textContent += operator;
        
    }
    if (e.target.classList.contains('equals')) {
        operate(operator, firstInt, secondInt);
        secondInt = '';
    }
    if (e.target.classList.contains('decimal')) {
        console.log('decimal', e.target.value);
    }
    if (e.target.classList.contains('all-clear')) {
        allClear();
        console.log(allClear);
    }
    if (e.target.classList.contains('delete')) {
        console.log('delete', e.target.value);
    }
    if (e.target.classList.contains('number')) {
        inputNumber(e.target.value);
        storeNum(e.target.value);
    }
});

function inputNumber(num) {
    return calcScreen.textContent === '0' ? calcScreen.textContent = num : calcScreen.textContent += num;
}

function storeNum(num) {
    if (firstInt === 0 && waitingForOperator === true) {
        firstInt = num;
    } else if (waitingForOperator === true) {
        firstInt += num;
    } else if (secondInt = '' && waitingForOperator === false) {
        secondInt = num;
    } else {
        secondInt += num;
    }
}

function allClear() {
    operator = '';
    firstInt = 0;
    waitingForOperator = true;
    secondInt = '';
    calcScreen.textContent = firstInt;
}