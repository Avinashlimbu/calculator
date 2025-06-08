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

// console.log(add(2, 3));
// console.log(subtract(4, 2));
// console.log(multiply(4, 2));
// console.log(divide (9, 3));

let firstNum
let secondNum
let operator

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

console.log(operate("/", 4, 2));