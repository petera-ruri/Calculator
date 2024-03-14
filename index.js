let display = document.getElementById("inputField");
let firstNumber = parseFloat(display.value);
let secondNumber = parseFloat(display.value);
let operator;
let result = '';

function clearResult() {
    display.value = '';
}
clearResult();

function handleNumber(firstNumberClicked, secondNumberClicked) {
    firstNumber = firstNumberClicked
    secondNumberClicked = ''
    secondNumber = secondNumberClicked
    display.value += firstNumber
    display.value += secondNumber
    // if (secondNumber === '0') {

    // } else {
    //     firstNumberClicked = secondNumber
    // }
    console.log('firstNumber:', firstNumber);
    console.log('secondNumber:', secondNumber);
}
handleNumber('');



function handleOperator(op) {
    operator = op;

    display.value += op

    if (op === '+') {
        operator === '+';
    } else if (op === '-') {
        operator === '-';
    } else if (op === '*') {
        operator === '*';
    } else if (op === '/') {
        operator === '/';
    }
    console.log('operator:', operator);
}
handleOperator('');

function handleCalculate() {
    let inputNumbers = display.value.split(operator);
    if (inputNumbers.length === 2 && !isNaN(inputNumbers[0]) && !isNaN(inputNumbers[1])) {
        let num1 = parseInt(inputNumbers[0].trim());
        let num2 = parseInt(inputNumbers[1].trim());

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
        display.value = result;
        console.log(result);
    } else {
        console.log("error");
    }
}
handleCalculate();


