let display = document.getElementById("inputField");
let firstNumber = '';
let operator = '';
let decimal = '';

function clearResult() {
    display.value = "";
}
clearResult();

// function operatorCalculation(num1, num2) {
//     if (operator === '+') {
//         num1 + num2;
//     } else if (operator === '-') {
//         num1 - num2;
//     } else if (operator === '*') {
//         num1 * num2;
//     } else if (operator === '/') {
//         num1 / num2;
//     } else {
//         return undefined;
//     }
// }
// // add();

function handleNumber(value) {
    display.value += value;
}
// handleNumber();

function handleCalculate() {
    const secondNumber = display.value;

    if (firstNumber !== '' && secondNumber !== '') {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);


        if (!isNaN(num1) && !isNaN(num2)) {
            let result;

            if (operator === '+') {
                result = num1 + num2;
            } else if (operator === '-') {
                result = num1 - num2;
            } else if (operator === '*') {
                result = num1 * num2;
            } else if (operator === '/') {
                result = num1 / num2;
            }


            if (result !== undefined) {
                display.value = result;
                firstNumber = '';
                decimal = ''
                operator = '';
            } else {
                display.value = 'Error';
            }
        }
    }
}
// handleCalculate();


function handleOperator(op) {
    if (firstNumber === '') {
        firstNumber = display.value;
        operator = op;
        decimal = ''
    } else {
        display.value += op;
    }
}
handleOperator();

