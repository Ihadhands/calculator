const btn = document.querySelector('.calculator-buttons');
const matches = document.querySelectorAll('div');
const bottomScreen = document.querySelector('.bottom-screen');
const equation = document.querySelector('.top-screen');
console.log(matches);
console.log(btn);

let operator = '';
let firstInt = 0;
let waitingForOperator = true;
let secondInt = '';
let result = '';


function inputNumber(num) {
    return equation.textContent === '0' ? equation.textContent = num : equation.textContent += num;
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
    switch(operator) {
        case '+':
            result = parseFloat(firstInt) + parseFloat(secondInt);
            bottomScreen.textContent = result;
            
        break;
        case '-':
            result = parseFloat(firstInt) - parseFloat(secondInt);
            bottomScreen.textContent = result;
        break;
        case '*':
            result = parseFloat(firstInt) * parseFloat(secondInt);
            bottomScreen.textContent = result;
        break;
        case '/':
            if ((firstInt === '0') || (secondInt === '0')) {
                alert('Please');
            }
            result = parseFloat(firstInt) / parseFloat(secondInt);
            bottomScreen.textContent = result;
    }
    
}

btn.addEventListener('click', function(e) {
    if (e.target.classList.contains('operator')) {
        operator = e.target.value;
        waitingForOperator = false;
        equation.textContent += operator;
        if (waitingForOperator === false && secondInt !== '') {
            operate(operator, firstInt, secondInt);
            firstInt = result;
            secondInt = '';
        }
    }
    if (e.target.classList.contains('equals')) {
        operate(operator, firstInt, secondInt);
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
    bottomScreen.textContent = firstInt;
    equation.textContent = firstInt;
}
