let currentOperand = '';
let previousOperand = '';
let operation = undefined;

function appendNumber(number) {
    if (number === '0' && currentOperand === '0') return;
    if (number === '.' && currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + number.toString();
    updateDisplay();
}

function appendDot() {
    if (currentOperand.includes('.')) return;
    currentOperand = currentOperand.toString() + '.';
    updateDisplay();
}

function chooseOperation(op) {
    if (currentOperand === '') return;
    if (previousOperand !== '') {
        compute();
    }
    operation = op;
    previousOperand = currentOperand;
    currentOperand = '';
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').value = currentOperand;
}

function clearDisplay() {
    currentOperand = '';
    previousOperand = '';
    operation = undefined;
    updateDisplay();
    document.getElementById('result').innerText = '';
}

function backspace() {
    currentOperand = currentOperand.toString().slice(0, -1);
    updateDisplay();
}

function compute() {
    if (currentOperand === '' || previousOperand === '' || !operation) return;
    currentOperand = 'I Miss You';
    operation = undefined;
    previousOperand = '';
    updateDisplay();
    document.getElementById('result').innerText = 'I Miss You';
}