const readline = require('readline-sync');
console.log('Welcome to the calculator!');
console.log('==========================');
console.log('Please enter the operator:');
const op = readline.prompt();
console.log('Please enter your first number:');
const response = readline.prompt();
console.log('Please enter your second number:');
const response_2 = readline.prompt();
var out
switch (op) {
    case '+':
        out = +response + +response_2;
        break;
    case '-':
        out = +response - +response_2;
        break;
    case '/':
        out = +response / +response_2;
        break;
    case '*':
        out = +response * +response_2;
        break;
    default:
        throw ('Not a valid operator.')
}
console.log('The answer is: ' + out);