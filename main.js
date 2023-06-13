"use strict";

const keys = document.querySelector('#digits')
const display = document.querySelector('#display')
const num1 = [];
const num2 = [];
let anzeige;
let zahl1 = 0;
let zahl2 = 0;
let operator = "";
let numberCheck = false;

function calculate(x, operator, y) {
    if (operator === '+') {
        return x + y;
    } else if (operator === '-') {
        return x - y;
    } else if (operator === '*') {
        return x * y;
    } else if (operator === '/') {
        return x / y;
    }
    return y;
}

function listenToKeys() {
    keys.addEventListener('click', (e) => {
        if (e.target.matches('.grid')) {
            let key = e.target;
            let action = key.dataset.action;
            let num = key.dataset.value;

            if (!action) {
                numbersLog(num);
            }

            if ((action === '+') ||
                (action === '-') ||
                (action === '*') ||
                (action === '/') ||
                (action === '=')) {
                choice(action);
            }

            if (action == '.') {
                dotAdd();
            }

            if (action == 'clear') {
                clear();
            }
        }
    })
}

function numbersLog(num) {
    if (numberCheck === false) {
        num1.push(num);
        zahl1 = num1.join("");
        anzeige = zahl1;
    }
    if (numberCheck === true) {
        num2.push(num);
        zahl2 = num2.join("");
        anzeige = zahl2;
    }
    updateDisplay();
}

function dotAdd() {
    if (numberCheck === false) {
        num1.push(".");
        zahl1 = num1.join("");
        anzeige = zahl1;
    }
    if (numberCheck === true) {
        num2.push(".");
        zahl2 = num2.join("");
        anzeige = zahl2;
    }
    updateDisplay();
}

function choice(wahl) {
    if (zahl1 === 0) {
        numberCheck = false;
    } else if (zahl2 === 0) {
        if (wahl === '+') {
            operator = '+';
        }
        if (wahl === '-') {
            operator = '-';
        }
        if (wahl === '*') {
            operator = '*';
        }
        if (wahl === '/') {
            operator = '/';
        }
        numberCheck = true;
    } else {
        zahl1 = calculate(+zahl1, operator, +zahl2);
        anzeige = zahl1;
        updateDisplay();
        operator = wahl;
        zahl2 = 0;
        num2.length = 0;
    }
}

function updateDisplay() {
    display.textContent = anzeige;
}
function clear() {
    num1.length = 0;
    num2.length = 0;
    zahl1 = 0;
    zahl2 = 0;
    operator = "";
    numberCheck = false;
    anzeige = "";
    updateDisplay();
}

listenToKeys();