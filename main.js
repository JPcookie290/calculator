"use strict";

const keys = document.querySelector('#digits')
const display = document.querySelector('#display')
const num1 = [];
const num2 = [];
let anzeige;
let zahl1 = null;
let zahl2 = null;
let operator = null;
let numberCheck = false;
let dot = false;

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
    if (numberCheck === false && dot === false) {
        num1.push(".");
        zahl1 = num1.join("");
        anzeige = zahl1;
        dot = true;
    }
    if (numberCheck === true && dot === false) {
        num2.push(".");
        zahl2 = num2.join("");
        anzeige = zahl2;
        dot = true; 
    }
    updateDisplay();
}


function choice(wahl) {
    if (zahl1 === null) {
        numberCheck = false;
        dot = false;
    } else if (zahl2 === null) {
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
        dot = false;
    } else {
        zahl1 = calculate(+zahl1, operator, +zahl2);
        anzeige = zahl1;
        updateDisplay();
        operator = wahl;
        zahl2 = null;
        num2.length = 0;
        dot = false;
    }
}

function updateDisplay() {
    display.textContent = anzeige;
}

function clear() {
    num1.length = 0;
    num2.length = 0;
    zahl1 = null;
    zahl2 = null;
    operator = null;
    numberCheck = false;
    dot = false;
    anzeige = "";
    updateDisplay();
}

listenToKeys();