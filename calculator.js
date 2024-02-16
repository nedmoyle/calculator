function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a/b;
};

// console.log(add(2, 2)); checks calculator functions work
// console.log(subtract(5, 3));
// console.log(multiply(2, 3));
// console.log(divide(12, 5));

let firstNumber;
let secondNumber;
let operator;
let clearNumber = false;
let operatorSet = false;

console.log(operator);

function operate(a, b, oper) {
    a = Number(a);
    b = Number(b);
    
    
    if (oper === '+') {
        return add(a, b);

    } else if (oper === '-') {
        return subtract(a, b);

    } else if (oper === '*') {
        return multiply(a, b);

    } else if (oper === '/') {
        return divide (a, b);
    }
};

// console.log(operate(2, 2, '/'));

const displayText = document.querySelector('#display');

const btnClear = document.querySelector('#clear');
btnClear.addEventListener('click', function () {clear()});

const numberButtons = document.querySelectorAll('.numbers');



numberButtons.forEach((btn) => {
    btn.addEventListener('click', function () {appendDisplay(btn.textContent)})
});

const btnAdd = document.querySelector('#add');
btnAdd.addEventListener('click', function () {
    
    operator = btnAdd.textContent; // takes button text and assigns it to be the operator
    clearNumber = true;

    if (operatorSet === true) {
        secondNumber = displayText.textContent;
        displayText.textContent = operate(firstNumber, secondNumber, operator);

        firstNumber = displayText.textContent;
    } else {
    
    firstNumber = displayText.textContent;
    btnAdd.style.backgroundColor = 'red';
    console.log(firstNumber);
    
    operatorSet = true;
    }
});

const btnEquals = document.querySelector('#equals');
btnEquals.addEventListener('click', function () {
    secondNumber = displayText.textContent;
    displayText.textContent = operate(firstNumber, secondNumber, operator);
    operatorSet === false;
})



function clear() {
    displayText.textContent = '0';
};

function appendDisplay(value) {
    
    if (displayText.textContent === '0' && clearNumber === false) {
        displayText.textContent = value;

    } else {
        displayText.textContent += value;
    }
    
    if (clearNumber === true) {
        displayText.textContent = value;
        clearNumber = false;    
    } 
    
    
}