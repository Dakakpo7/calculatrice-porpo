let display = document.getElementById('display');
let currentInput = '0';
let memory = 0;
let lastOperation = '';

function appendToDisplay(value) {
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.value = currentInput;
}

function clearAll() {
    currentInput = '0';
    memory = 0;
    lastOperation = '';
    display.value = currentInput;
}

function clearEntry() {
    currentInput = '0';
    display.value = currentInput;
}

function toggleSign() {
    if (currentInput !== '0') {
        currentInput = (parseFloat(currentInput) * -1).toString();
        display.value = currentInput;
    }
}

function calculate() {
    try {
        let result = eval(currentInput.replace('÷', '/').replace('×', '*'));
        if (isNaN(result) || !isFinite(result)) {
            display.value = 'Erreur';
            currentInput = '0';
            return;
        }
        display.value = result;
        currentInput = result.toString();
    } catch (error) {
        display.value = 'Erreur';
        currentInput = '0';
    }
}

function appendToDisplay(value) {
    if (value === '%') {
        currentInput = (parseFloat(currentInput) / 100).toString();
        display.value = currentInput;
        return;
    }
    if (currentInput === '0' && value !== '.') {
        currentInput = value;
    } else {
        currentInput += value;
    }
    display.value = currentInput;
}