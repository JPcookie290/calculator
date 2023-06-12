"use strict";

const keys = document.querySelector('#digits')
const display = document.querySelector('#display')
let num1 = 0;
let num2 = 0;

function calculate(x, operator, y) {
    console.log(x, y);
    if (operator === '+') {
        return x + y;
    } else if (operator === '-') {
        return x - y;
    } else if (operator === '*') {
        return x * y;
    } else if (operator === '/') {
        return x / y;
    }
    console.log(y);
    return y;
}

function listenToKeys() {
    keys.addEventListener('click', (e) => {
        if (e.target.matches('.grid')) {
            let key = e.target;
            let action = key.dataset.action;
            let num = key.dataset.value;

            if (!action) {
                console.log("number");
                if(num2 === 0){
                    num1 = num;
                } 
                if (num1 != 0){
                    num2 = num;
                }
                console.log("numbers", num1, num2);
            }

            if ((action === '+') ||
                (action === '-') ||
                (action === '*') ||
                (action === '/') ||
                (action === '=')) {
                    console.log("operator");
            }

            if (action == '.') {
                console.log("dot");
            }

            if (action == 'clear') {
                console.log("clear");
            }
        }
    })
}