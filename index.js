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
    } else if (op === '.') {
        operator === '.';
    }
    console.log('operator:', operator);
}
handleOperator('');

function handleCalculate() {
    let inputNumbers = display.value.split(operator);
    if (inputNumbers.length === 2 && !isNaN(inputNumbers[0]) && !isNaN(inputNumbers[1])) {
        let num1 = parseFloat(inputNumbers[0].trim());
        let num2 = parseFloat(inputNumbers[1].trim());
        // let num3 = parseInt(inputNumbers[2].trim());
        // let num4 = parseInt(inputNumbers[3].trim());

        let result;
        if (operator === '+') {
            result = num1 + num2;
        } else if (operator === '-') {
            result = num1 - num2;
        } else if (operator === '*') {
            result = num1 * num2;
        } else if (operator === '/') {
            result = num1 / num2;
        } if (operator === '.') {
                result = num1 + num2;
                result = result.toFixed(1);
            }
            console.log(result);
            display.value = result;
        }
           else {
        console.log("error");
        }
}
console.log(handleCalculate());


