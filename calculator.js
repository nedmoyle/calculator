function add (a, b) {
    return (a + b);
};

function subtract (a, b) {
    return (a - b);
};

function multiply (a, b) {
    return (a * b);
};

function divide (a, b) {
    if (b === 0) {
        return "ERR DIV 0"; //returns error if divide by zero
    } else {
        return (a/b).toFixed(2); //sets to two decimal places
    }
};

function percentage (a) {
    displayText.textContent = Number(a)/100;
}

function sign (a) {
       displayText.textContent = -Number(a);
}


let firstNumber;
let secondNumber;
let operator;
let previousOperator;
let clearNumber = false;
let operatorSet = false;
let chain = false;

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

function decimal (str) {
    const regex = /\./;
    
    if (!regex.test(str) && str == '0') {
        appendDisplay('0.');
    } else if (!regex.test(str) && str != '0') {
        appendDisplay('.');
    }
};


const displayText = document.querySelector('#display');

const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', function () {decimal(displayText.textContent)});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', function () {clear()});


const percentageButton = document.querySelector('#percentage');
percentageButton.addEventListener('click', function () {percentage(displayText.textContent)});

const signButton = document.querySelector('#sign');
signButton.addEventListener('click', function () {sign(displayText.textContent)});


const numberButtons = document.querySelectorAll('.numbers');
numberButtons.forEach((btn) => {
    btn.addEventListener('click', function () {appendDisplay(btn.textContent)})
});


const operatorButtons = document.querySelectorAll('.operators'); 
operatorButtons.forEach((btn) => {
    btn.addEventListener('click', function () {  
        
        clearNumber = true;

        if (operatorSet === true && chain === false) { // section for second number entered
            secondNumber = displayText.textContent;
            displayText.textContent = operate(firstNumber, secondNumber, operator); 
            firstNumber = displayText.textContent;
            previousOperator = btn.textContent;
            chain = true;

        } else if (operatorSet === true && chain === true) { /// section for all chained maths
            secondNumber = displayText.textContent;
            displayText.textContent = operate(firstNumber, secondNumber, previousOperator);
            firstNumber = displayText.textContent;
            previousOperator = btn.textContent;
            chain = true;

        } else { // this section is for the first number entered //
            operator = btn.textContent; // takes button text and assigns it to be the operator
            firstNumber = displayText.textContent;
            console.log(firstNumber);
        
            operatorSet = true;
        }
    })
});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', function () {
    
    if (!firstNumber) {
        return;
    }

    secondNumber = displayText.textContent;
    
    if (chain === true) {
        displayText.textContent = operate(firstNumber, secondNumber, previousOperator);
        chain = false;
        firstNumber = displayText.textContent;

    } else {
        displayText.textContent = operate(firstNumber, secondNumber, operator);
        firstNumber = displayText.textContent;
        
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