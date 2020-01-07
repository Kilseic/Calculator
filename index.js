const readline = require('readline-sync');
printWelcomeMessage();
while (true) {
    performOneCalculation();
}

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}

function performOneCalculation() {
    const op = askForInput('Please enter the operator: ');
    const n = +askForInput('How many numbers would you like to ' + op + '?');
    let arr = collectNumbers(n);
    operate(arr, op, n);
}

function operate(array, operator, amount){
    var out = array[0];
    switch (operator) {
        case '+':
            for (let i = 1; i < amount; i++) {
                out = out + array[i]
            } break;
        case '-':
            for (let i = 1; i < amount; i++) {
                out = out - array[i]
            } break;
        case '/':
            for (let i = 1; i < amount; i++) {
                out = out / array[i]
            } break;
        case '*':
            for (let i = 1; i < amount; i++) {
                out = out * array[i]
            } break;
        default:
            throw ('Not a valid operator.')
        }
    console.log('The answer is: ' + out);
}

function collectNumbers(amount){
    let temp = [];
    for (let i = 0; i < amount; i++) {
        temp[i] = +askForInput('Please enter number ' + (i+1) +': ');
        if (isNaN(temp[i])){
            console.log('Sorry, please enter a valid number.');
            i -= 1;
        }
    }
    return temp;
}

function askForInput(question){
    console.log(question);
    const response = readline.prompt();
    return response;
}