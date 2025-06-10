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

// for test
// console.log(add(2, 3));
// console.log(subtract(4, 2));
// console.log(multiply(4, 2));
// console.log(divide (9, 3));

//Var for numbers to be stored

let firstNum
let secondNum
let operator

//operating function that helps calcute with three arguement
//operator and two numbers
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
//for test
//  console.log(operate("/", 4, 2));

//function for display

const button = document.getElementsByClassName('btn');
const display = document.getElementById('display-area');

function displayArea () {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click',(event) => {
            const target = event.target;
            let content = display.textContent = target.textContent;
            let numberA = Number(content);
            //console.log(content);
            console.log(operate("+", numberA, numberA));
            //console.log(content);
        });
    }
}

displayArea();

function execution ()  {
    
}


/*
1. When the button is clicked
>how would I on click get the element of html
>store that number in a variable
>make sure that number is displayed in the screen


1. when the button is clicked it should store the number in firstNum
2. when the button is clicked after the operator, it should be 

*/