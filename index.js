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
if (op == "+") {
    out = +response + +response_2;
} else if (op == "-") {
    out = +response - +response_2;
} else if (op == "/") {
    out = +response / +response_2;
} else if (op == "*") {
    out = +response * +response_2;
} else {
    throw new UserException("Operator not valid.")
}
console.log("The answer is:" + out);