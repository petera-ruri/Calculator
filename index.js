function appendValue(value) {
    document.getElementById('result').value += value;
}

function clearResult() {
    document.getElementById('result').value = '';
}


let currentInput = ''; // Variable to store the current input
let result = ''; // Variable to store the result

function appendValue(value) {
    currentInput += value;
    document.getElementById('result').value = currentInput;
}

function clearResult() {
    currentInput = '';
    result = '';
    document.getElementById('result').value = '';
}

function calculateResult() {
    result = eval(currentInput); // Using eval() for simplicity; consider alternative methods for security
    document.getElementById('result').value = result;
    currentInput = ''; // Clear the current input after calculation
}


function calculatePercentage() {
    result = eval(currentInput) / 100; // Calculate percentage
    document.getElementById('result').value = result;
    currentInput = ''; // Clear the current input after calculation
}