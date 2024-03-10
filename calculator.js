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
    if (b === 0) {
        return "ERROR DIV 0";
    } else {
        return a/b;
    }
};

// console.log(add(2, 2)); checks calculator functions work
// console.log(subtract(5, 3));
// console.log(multiply(2, 3));
// console.log(divide(12, 5));

let firstNumber;
let secondNumber;
let operator;
let previousOperator;
let clearNumber = false;
let operatorSet = false;
let chain = false;

// console.log(operator);

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

const operatorButtons = document.querySelectorAll('.operators'); 

operatorButtons.forEach((btn) => {
    btn.addEventListener('click', function () {  
        


        
        clearNumber = true;

        if (operatorSet === true && chain === false) { // section for second number entered
            btn.style.backgroundColor = 'blue';
            secondNumber = displayText.textContent;
            displayText.textContent = operate(firstNumber, secondNumber, operator); 
            firstNumber = displayText.textContent;
            // operatorSet = false;
            previousOperator = btn.textContent;
            chain = true;

        } else if (operatorSet === true && chain === true) { /// section for all chained maths
            btn.style.backgroundColor = 'green';
            secondNumber = displayText.textContent;
            displayText.textContent = operate(firstNumber, secondNumber, previousOperator);
            firstNumber = displayText.textContent;
            previousOperator = btn.textContent;
            chain = true;

        } else { // this section is for the first number entered //
            operator = btn.textContent; // takes button text and assigns it to be the operator
            firstNumber = displayText.textContent;
            btn.style.backgroundColor = 'red';
            console.log(firstNumber);
        
            operatorSet = true;
        }
    })
});

const btnEquals = document.querySelector('#equals');
btnEquals.addEventListener('click', function () {
    
    secondNumber = displayText.textContent;
    
    if (chain === true) {
        displayText.textContent = operate(firstNumber, secondNumber, previousOperator);
        chain = false;
        firstNumber = displayText.textContent;
        console.log("youre in the chain of equals")
        // operatorSet = false;
    } else {
        displayText.textContent = operate(firstNumber, secondNumber, operator);
        firstNumber = displayText.textContent;
        console.log("youre in the non chain of equals")
    }
    operatorSet = false;
});



function clear() {
    displayText.textContent = '0';
    firstNumber = undefined;
    secondNumber = undefined;
    chain = false;
    operatorSet = false;
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