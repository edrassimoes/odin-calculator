const digits = document.querySelectorAll(".digit");
const display =  document.querySelector(".display");
const clear = document.querySelector(".clear");
const result = document.querySelector(".result");

let input = '';

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

function operate(firstNumber, secondNumber, operation) {

    const first = Number(firstNumber);
    const second = Number(secondNumber);

    switch (operation) {
        case '+':
            return add(first, second);
        case '-':
            return subtract(first, second);
        case '*':
            return multiply(first, second);
        case '/':
            return divide(first, second);
    }
}

function extractFromString(string) {
    let breakpoint = /[+\-*/]/

    let operator = string.match(breakpoint)[0];
    let arr = string.split(breakpoint);

    const first = arr[0];
    const second = arr[1];

    return [first, second, operator];
}

digits.forEach((digit) => {
    digit.addEventListener("click", e => display.innerHTML += e.target.innerHTML);
})

clear.addEventListener("click", () => {display.innerHTML = ""});
result.addEventListener("click", () => {
    input = display.innerHTML;
    const components = extractFromString(input);
    display.innerHTML = operate(components[0], components[1], components[2]);
});

