// script.js
let display = document.querySelector('.input input');

function clearDisplay() {
    display.value = '';
}
function deleteLast() { display.value = display.value.slice(0, -1);}


function appendNumber(number) {
    display.value += number;
}

function appendOperator(operator) {
    display.value += operator;
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (e) {
        display.value = 'Error';
    }
}


