//basic math functions

const add = function(a, b) {
    return a + b;
}

const subtract = function(a, b) {
    return a - b;
}

const multiply = function(a, b) {
    return a * b;
}

const divide = function(a, b) {
    return a / b;
}

const percentage = function(a) {
    if (a === 0) {
        alert ("cannot divide by zero");
    }
    return(a) / 100;
}
//Var for numbers to be stored

let firstNum = null;
let secondNum = null;
let operator = null;
let resetDisplay = false;

//operating function that helps calcute with three arguement
function operate(operator, a, b) {
    if (operator ===  '+') {
        return add(a, b);
    }
    else if (operator === '-') {
        return subtract(a, b);
    }
    else if (operator === '*') {
        return multiply(a, b);
    }
    else if (operator === '/') {
        return divide(a, b);
    }
}

function operateUnary(operator, a) {
    if (operator === '%') {
        return percentage(a);
    }
}




//all the DOM calls
const button = document.getElementsByClassName('numbers');
const display = document.getElementById('display-area');
const operators = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear-button');
const equalButton = document.querySelector('.equal');

//function for display
function displayArea () {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click',(event) => {
            const target = event.target;
        if(resetDisplay) {
            display.value = target.textContent;
            resetDisplay = false;
        } else {
            display.value += target.textContent;
        }    
        });
    }
}
displayArea();

//clear button function
function clear () {
    clearButton.addEventListener('click', function() {
        firstNum = null;
        secondNum = null;
        operator = null;
        display.value = '';
        resetDisplay = false;
    });
}
clear();

//operator function
operators.forEach(function(op){
    op.addEventListener("click", (event) => {
        const target = event.target;
        const newOperator = target.textContent;

        if(newOperator === '%') {
            firstNum = Number(display.value);
            const unaryResult = operateUnary(newOperator, firstNum)
            display.value = roundUp(unaryResult);
            resetDisplay = true;
            return;
        }
        if (!['+', '-', '*', '/'].includes(newOperator)) {
            return;
        } 
        if (firstNum !== null && operator !== null && display.value !== "") {
            secondNum = Number(display.value);
            if(isNaN(secondNum)) return;

            const result = operate(operator, firstNum, secondNum);
            display.value = roundUp(result);
            firstNum = result;
        } else {
            firstNum = Number(display.value);
        }
        operator = newOperator;
        resetDisplay = true;
    })
})

//equal button function

equalButton.addEventListener("click", () => {
    if(operator === null || firstNum === null) {
        return;
    }
    secondNum = Number(display.value);

    if(operator ==="/" && secondNum === 0) {
        alert("Cannot Divide by 0!")
        return;
    }

    const result = operate(operator, firstNum, secondNum);
    display.value = roundUp(result);
    firstNum = result;
    operator = null;
    resetDisplay = true;
})

// function for rounding upto 4 numbers
function roundUp (number) {
    return Math.ceil(number * 10000)/ 10000;
}

