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

function operate(a, b, oper) {
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

// const btnOne = document.querySelector('#one');
// btnOne.addEventListener('click', function () {appendDisplay('1')});

function clear() {
    displayText.textContent = 'Cleared';
};

function appendDisplay(value) {
    if (displayText.textContent === 'Cleared') {
        displayText.textContent = value;
    } else {
    displayText.textContent += value;
    }
}