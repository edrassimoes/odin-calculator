const digits = document.querySelectorAll(".digit");
const display =  document.querySelector(".display");
const clear = document.querySelector(".clear");
const remove = document.querySelector(".delete");
const decimal  = document.querySelector(".decimal");
const result = document.querySelector(".result");

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
            if (second === 0) {
                alert("Cannot divide by zero!")
                return divide(first, 1); // needs to be changed!
            } else {
                return divide(first, second);
            }
    }
}

function extractFromString(string) {
    const breakpoint = ["+", "-", "*", "/"];
    const arr = string.split('');

    let operation = [];
    let index = 0;

    for (let i = 0; i < arr.length; i++) {
        if (breakpoint.includes(arr[i])) {
            let number = arr.slice(index, i).join('');
            operation.push(number);
            operation.push(arr[i]);
            index = i + 1;
        }
    }

    operation.push(arr.slice(index).join(''));

    return operation;

}

function readOperation(operation) {
    const operators = ["*", "/", "+", "-"]; // in order of priority.
    let arr = operation.slice();

    operators.forEach((op) => {
        while (arr.includes(op)) {
            let index = arr.indexOf(op)
            let result = operate(arr[index - 1], arr[index + 1], arr[index]);
            arr.splice(index - 1, 3, result);
        }
    })

    return arr;
}

digits.forEach((digit) => {
    digit.addEventListener("click", e => display.innerHTML += e.target.innerHTML);
})

clear.addEventListener("click", () => {display.innerHTML = ""});

remove.addEventListener("click", () => {
    display.innerHTML = display.innerHTML.slice(0, -1);
});

decimal .addEventListener("click", () => {
    const lastDigit = extractFromString(display.innerHTML).slice(-1);
    if (lastDigit[0].includes(".") || lastDigit[0] === '') {
        alert("Cannot add comma!")
    } else {
        display.innerHTML += ".";
    }
})

result.addEventListener("click", () => {
    const input = display.innerHTML;
    const arr = extractFromString(input);
    const result = readOperation(arr);
    display.innerHTML = (Math.round( result * 100)/100).toFixed(2);
});

