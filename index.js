const display = document.getElementById("inputField");


function appendValue(input) {
    display.value += input;
}
appendValue();
function clearResult() {
    display.value = "";
}
clearResult();

function calculateResult(operator) {
    let numberValue = document.getElementById("btn");
    let userInput = display.value + numberValue;
    let inputValue;

    if (operator === "+") {
        inputValue = userInput + 1;
    } else if (operator === "-") {
        inputValue = userInput - 2;
    } else if (operator === "*") {
        inputValue = userInput * 3;
    } else if (operator === "/") {
        inputValue = userInput / 4;
    } else if (operator === "=") {
        inputValue = numberValue + userInput;
    } else {
        inputValue = display.value("error")
    }
    document.getElementById("inputField").value = inputValue;
}
console.log(inputValue)