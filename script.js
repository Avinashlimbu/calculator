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
const equalButton = document.getElementsByClassName('equal');

function displayArea () {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click',(event) => {
            const target = event.target;
            let content = display.value += target.textContent;
            content = Number(content)
            if (operator === " ") {
                firstNum += event.target.textContent;
                console.log(firstNum);
            } else {
                secondNum += event.target.textContent;
                console.log(secondNum);
            }
        
        });
    }
}

displayArea();

//operator function, don't think this is working
operators.forEach(function(op){
    op.addEventListener("click", (event) => {
        if (operator === "+") {
            firstNum = "";
        }
        operator = event.target.textContent;
        console.log("operator is working");
    })
})


//clear button function
clearButton.addEventListener('click', function() {
    console.log("C is working");
    firstNum = '';
    secondNum = '';
    operator = '';
    document.getElementById('display-area').value = '';
});


