const btn = document.querySelector('.calculator-buttons');
const matches = document.querySelectorAll('div');
const calcScreen = document.querySelector('.screen');
console.log(matches);
console.log(btn);

let operator = '';
let firstInt = 0;
let waitingForOperator = true;
let secondInt = '';

function inputNumber(num) {
    return calcScreen.textContent === '0' ? calcScreen.textContent = num : calcScreen.textContent += num;
}

function storeNum(num) {
    if (firstInt === 0 && waitingForOperator === true) {
        firstInt = num;
    } else if (waitingForOperator === true) {
        firstInt += num;
    } else if (secondInt === '' && waitingForOperator === false) {
        secondInt = num;
    } else {
        secondInt += num;
    }
}

function operate(operator, firstInt, secondInt) {
    let result = '';
    if (operator === '+') {
        result = +firstInt + +secondInt;
        calcScreen.textContent = result;
        return result;
    } else if (operator === '-') {
        result = firstInt - secondInt;
        calcScreen.textContent = result;
        return result;
    } else if (operator === '/') {
        result = firstInt / secondInt;
        calcScreen.textContent = result;
        return result;
    } else if (operator === '*') {
        result = firstInt * secondInt;
        calcScreen.textContent = result;
        return result;
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
        let result = operate(operator, firstInt, secondInt);
        secondInt = '';
        firstInt = result;
        console.log(firstInt);
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



function allClear() {
    operator = '';
    firstInt = 0;
    waitingForOperator = true;
    evaluate = false;
    secondInt = '';
    calcScreen.textContent = firstInt;
}
