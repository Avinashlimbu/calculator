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

//function for display

const button = document.getElementsByClassName('numbers');
const display = document.getElementById('display-area');
const operators = document.querySelectorAll('.operator');
const clearButton = document.getElementById('clear-button');
const equalButton = document.querySelectorAll('.equal');

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

equalButton.forEach(function(equal) {
    equal.addEventListener("click", () => {
    secondNum = Number(display.value);
    console.log(operate(operator, firstNum, secondNum))
    document.getElementById('display-area').value = operate(operator, firstNum, secondNum);
        })
    })