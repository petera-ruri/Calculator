let display = document.getElementById("inputField");
let firstNumber = parseFloat(display.value);
let secondNumber = parseFloat(display.value);
let operator = '';
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
    
    
    if (secondNumber === '0') {
        
    } else {
        firstNumberClicked = secondNumber
    }
    console.log('firstNumber:', firstNumber);
    console.log( 'secondNumber:', secondNumber);
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
console.log(handleOperator(''));


function handleCalculate(operator) {
    let secondNumber = display.value

    let num1 = parseFloat(firstNumber);
    let num2 = parseFloat(secondNumber);


   
    let result = (num1 + num2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    let total = parseInt(result);
   
    if (operator === '=') {
        display.value = result
    }

        if (operator === '+') {
            result = num1 + num2
        } else if (operator === '-') {
            result = num1 - num2
        } else if (operator === '*') {
            result = num1 * num2
        } else if (operator === '/') {
            result = num1 / num2
        } else {
           
        }

      
        console.log('result:', total);
    }

handleCalculate('');

