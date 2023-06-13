# Calculator

A simple Calculator.
It can add, subtract, multiply and divide.

```
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
```
Calculates the input of two numbers.

```
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
```
Listens to the input/keys and executes other functions.

```
function updateDisplay() {
    display.textContent = anzeige;  
}
```
Updates the display.

```
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
```
Pushes the input into arrays and then joins them to a string.

```
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
```
Adds the decimal point.

```
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
```
Choses the operator for the equation and cauculates.

```
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
```
Sets the virables back to zero, emptys the arrays and clears the display