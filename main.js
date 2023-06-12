"use strict";



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

const keys = document.querySelector('#digits')
const display = document.querySelector('#display')
let current = "";
let checkNum2 = false;
let zahl1;
let zahl2;
let ergebnis;

function listenToKeys() {
    keys.addEventListener('click', (e) => {
        if (e.target.matches('.grid')) {
            let key = e.target;
            let action = key.dataset.action;
            let num = key.dataset.value;

            if (!action) {
                numLog(num);
                updateDisplay();
            }

            if ((action === '+') ||
                (action === '-') ||
                (action === '*') ||
                (action === '/') ||
                (action === '=')) {
                opLog(action);
                updateDisplay();
            }

            if (action == '.') {
                addPoint();
                updateDisplay();
            }

            if (action == 'clear') {
                clear();
                updateDisplay();
            }
        }
    })
}

function updateDisplay() {
    display.innerHTML = current;
}

function numLog(zahl) {
    if (checkNum2 === false) {
        current += zahl;
    }
    if (checkNum2 === true) {
        current += zahl;
    }
    //console.log('Ziffer', current, checkNum2);
}

function opLog(operator) {
    if (checkNum2 === false) {
        zahl1 = parseFloat(current);
        checkNum2 = true;
        current = "";
    }
    if (checkNum2 === true) {
        zahl2 = parseFloat(current);
        if (isNaN(ergebnis)) {
            ergebnis = calculate(zahl1, operator, zahl2);
            console.log(zahl1, zahl2, ergebnis);
            current = "";
        } else{
            zahl1 = ergebnis;
            ergebnis = calculate(zahl1, operator, zahl2);
            console.log(zahl1, zahl2, ergebnis);
            current = "";
        }
    }
    //console.log('Rechenoperator', zahl1, operator, checkNum2);
}

function addPoint() {
    current += ".";
    console.log('Punkt');
}

function clear() {
    current = "";
    checkNum2 = false;
    console.log('AC', checkNum2);
}

listenToKeys();