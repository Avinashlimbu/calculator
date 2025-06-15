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

//Var for numbers to be stored

let firstNum = "";
let secondNum = "";
let operator = "";

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
            let content = display.value += target.textContent;
            content = Number(content)
        });
    }
}
displayArea();

//clear button function
function clear () {
    clearButton.addEventListener('click', function() {
        firstNum = '';
        secondNum = '';
        operator = '';
        document.getElementById('display-area').value = '';
    });
}
clear();

//operator function
operators.forEach(function(op){
    op.addEventListener("click", (event) => {
        const target = event.target;
        operator = target.textContent;
        if (['+', '-', '*', '/'].includes(target.textContent)) {
            firstNum = Number(display.value);
            document.getElementById('display-area').value = '';
        } 
    })
})

//equal button function

equalButton.addEventListener("click", () => {
    secondNum = Number(display.value);
    if(operator ==="/" && secondNum === 0) {
        alert("Cannot Divide by 0!")
        return;
    } else if (!firstNum || !secondNum || !operator){
        return "";
    }
    const result = operate(operator, firstNum, secondNum);
    document.getElementById('display-area').value = roundUp(result);
})

// function for rounding upto 4 numbers
function roundUp (number) {
    return Math.ceil(number * 10000)/ 10000;
}
