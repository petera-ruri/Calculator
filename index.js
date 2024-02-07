// function appendValue(value) {
//     document.getElementById('result').value += value;
// }


let currentInput = ''; 
let result = '';

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
    result = eval(currentInput); 
    document.getElementById('result').value = result;
    currentInput = '';
}


function calculatePercentage() {
    result = eval(currentInput) / 100; 
    document.getElementById('result').value = result;
    currentInput = ''; 
}

function divide() {
    currentInput += '/';
    document.getElementById('result').value = currentInput;
    
}