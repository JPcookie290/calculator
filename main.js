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

function listenToKeys() {
    keys.addEventListener('click', (e) => {
        if (e.target.matches('.grid')) {
            let key = e.target;
            let action = key.dataset.action;
            let keyContent = key.getAttribute('data-value');

            if (!action) {
                console.log('eine Ziffer wurde geklickt');
            }

            if ((action === '+') ||
                (action === '-') ||
                (action === '*') ||
                (action === '/') ||
                (action === '=')) {
                console.log('ein Rechenoperator wurde geklickt');
            }

            if (action == '.') {
                console.log('der Dezimalpunkt wurde geklickt');
            }
            if (action == 'clear') {
                console.log('die Taste AC wurde geklickt');
            }
        }
    })
}