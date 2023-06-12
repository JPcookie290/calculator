"use strict";

const keys = document.querySelector('#digits')
const display = document.querySelector('#display')
const num1 = [];
const num2 = [];
let numberCheck = false;

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
                numbersLog(num);
            }

            if ((action === '+') ||
                (action === '-') ||
                (action === '*') ||
                (action === '/') ||
                (action === '=')) {
                    console.log("operator");
                    numberCheck = true;

            }

            if (action == '.') {
                console.log("dot");
                if(numberCheck === false){
                    num1.push(".");
                }
                if (numberCheck === true){
                    num2.push(".");
                }
            }

            if (action == 'clear') {
                console.log("clear");
            }
        }
    })
}

listenToKeys();

function numbersLog(num) {
    if(numberCheck === false){
        num1.push(num);
    }
    if (numberCheck === true){
        num2.push(num);
    }
    console.log(num1.join(""),num2.join(""));
}