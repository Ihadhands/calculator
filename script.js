// QuerySelectors for buttons and textContent elements

const btn = document.querySelector('.calculator-buttons');
const bottomScreen = document.querySelector('.bottom-screen');
const equation = document.querySelector('.top-screen');
const numbers = document.querySelectorAll('.number');
const chooseOp = document.querySelectorAll('.operator');
const equalBtn = document.querySelector('.equals');
const clear = document.querySelector('.all-clear');
const deletePrevious = document.querySelector('.delete');

// Variables to allow the functions of the calculator

let operator = '';
let firstInt = '';
let waitingForOperator = true;
let secondInt = '';
let result = '';
let firstOp = '';
let secondOp = '';

//Event listeners to make buttons functional

numbers.forEach(number => {
    number.addEventListener('click', event => {
        storeNum(event.target.value);
    });
})

chooseOp.forEach(op => {
    op.addEventListener('click', event => {
        operator = event.target.value;
        waitingForOperator = false;
        equation.textContent += operator;
        firstSecondOp(event.target.value);
    })
});


equalBtn.addEventListener('click', function() {
    operate(operator, firstInt, secondInt); 
    firstInt = result;
    firstOp = '';
    secondInt = '';
});

clear.addEventListener('click', () => {
    allClear();
});

deletePrevious.addEventListener('click', () => {
    equation.textContent = equation.textContent.slice(0, -1);

    if (firstInt !== '' && firstOp !== '' && secondOp !== '' && secondInt !== '') {
        secondInt = secondInt.slice(0, secondInt.length - 1);
    }else if (firstInt !== '' && firstOp !== '' && secondOp == '' && secondInt !== '') {
        secondInt = secondInt.slice(0, secondInt.length - 1); 
    }else if (firstInt !== '' && firstOp !== '' && secondOp !== '' && secondInt === '') {
        secondOp = secondOp.slice(0, secondOp.length - 1);
    }else if (firstInt !== '' && firstOp == '' && secondOp !== '' && secondInt == '') {
        secondOp = secondInt.slice(0, secondInt.length - 1);
    }else if (firstInt !== '' && firstOp !== '' && secondOp === '' && secondInt === '') {
        firstOp = firstOp.slice(0, firstOp.length - 1);
    } else if (firstInt !== '' && firstOp === '' && secondOp === '' && secondInt === '') {
        firstInt = firstInt.slice(0, firstInt.length - 1);
    }
})

// Logic for declaring variables and math functions

function storeNum(num) {
    
    if (firstInt === '' && waitingForOperator === true) {
        if ((num === '.' && firstInt.includes('.'))) return;
        firstInt = num;
        equation.textContent = firstInt;
    } else if (waitingForOperator === true) {
        if ((num === '.' && firstInt.includes('.'))) return;
        firstInt += num;
        equation.textContent = firstInt;
    } else if (secondInt === '' && waitingForOperator === false) {
        if ((num === '.' && secondInt.includes('.'))) return;
        secondInt = num;
        equation.textContent = secondInt;
    } else {
        if ((num === '.' && secondInt.includes('.'))) return;
        secondInt += num;
        equation.textContent = secondInt;
    }
};

function operate(operator, firstInt, secondInt) {
    switch(operator) {
        case '+':
            result = parseFloat(firstInt) + parseFloat(secondInt);
            result = Math.round((result + Number.EPSILON) * 100) / 100;
            bottomScreen.textContent = result;
        break;
        case '-':
            result = parseFloat(firstInt) - parseFloat(secondInt);
            result = Math.round((result + Number.EPSILON) * 100) / 100;
            bottomScreen.textContent = result;
        break;
        case '*':
            result = parseFloat(firstInt) * parseFloat(secondInt);
            result = Math.round((result + Number.EPSILON) * 100) / 100;
            bottomScreen.textContent = result;
        break;
        case '/':
            if ((firstInt === '0' && secondInt > 0) || (secondInt === '0' && firstInt > 0)) {
                alert('Do you really need a calculator for that');
                allClear();
            } else {
                result = parseFloat(firstInt) / parseFloat(secondInt);
                result = Math.round((result + Number.EPSILON) * 100) / 100;
                bottomScreen.textContent = result;
            };
    };
    
};

function firstSecondOp(operator){
    if (firstOp === '' && secondOp === '') {
        firstOp = operator;
    } else if (firstOp !== '' && secondOp === '') {
        secondOp = operator;
        operate(firstOp, firstInt, secondInt);
        firstOp = '';
        secondInt = '';
        firstInt = result;
    } else if (firstOp === '' && secondOp !== '') {
        operate(secondOp, firstInt, secondInt);
        firstOp = operator;
        firstInt = result;
        secondOp = '';
        secondInt = '';
    }
    
}

function allClear() {
    operator = '';
    firstInt = '';
    waitingForOperator = true;
    evaluate = false;
    secondInt = '';
    firstOp = '';
    secondOp = '';
    bottomScreen.textContent = firstInt;
    equation.textContent = firstInt;
};
