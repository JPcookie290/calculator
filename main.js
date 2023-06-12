"use strict";

function calculate(x, y, operator) {
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

const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const multiply = document.querySelector(".multiply");
const divide = document.querySelector(".divide");
const clear = document.querySelector(".clear");
const point = document.querySelector("point");
const equal = document.querySelector(".equal");

function listenToKeys() {
    keys.addEventListener('click', (e) => {
        if (e.target.matches('.grid')) {
            let key = e.target;
            let action = key.dataset.action;

            if (!action) {
                console.log('Ziffer wurde geklickt');
            }

            if ((action === '+') ||
                (action === '-') ||
                (action === '*') ||
                (action === '/') ||
                (action === '=')) {
                console.log('Rechenoperator wurde geklickt');
            }

            if (action == '.') {
                console.log('Dezimalpunkt wurde geklickt');
            }
            if (action == 'clear') {
                console.log('AC wurde geklickt');
            }
        }
    })
}