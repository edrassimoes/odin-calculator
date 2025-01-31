const digits = document.querySelectorAll(".digit");
const display =  document.querySelector(".display");
const clear = document.querySelector(".clear");

function add(first, second) {
    return first + second;
}

function subtract(first, second) {
    return first - second;
}

function multiply(first, second) {
    return first * second;
}

function divide(first, second) {
    return first / second;
}

function operate(first, second, operation) {
    switch (operation) {
        case 'add':
            return add(first, second);
        case 'subtract':
            return subtract(first, second);
        case 'multiply':
            return multiply(first, second);
        case 'divide':
            return divide(first, second);
    }
}

digits.forEach((digit) => {
    digit.addEventListener("click", e => display.innerHTML += e.target.innerHTML);
})

clear.addEventListener("click", () => {display.innerHTML = "";});