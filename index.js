const readline = require('readline-sync');
console.log('Welcome to the calculator!');
console.log('==========================');
console.log('Please enter the operator:');
const op = readline.prompt();
console.log('How many numbers would you like to ' + op + '?')
const n = readline.prompt();
let arr = [];
for (let i = 0; i < n; i++) {
    console.log('Please enter number ' + (i+1) +': ');
    arr[i] = +readline.prompt();
}
var out = arr[0];
switch (op) {
    case '+':
        for (let i = 1; i < n; i++) {
            out = out + arr[i]
        } break;
    case '-':
        for (let i = 1; i < n; i++) {
            out = out - arr[i]
        } break;
    case '/':
        for (let i = 1; i < n; i++) {
            out = out / arr[i]
        } break;
    case '*':
        for (let i = 1; i < n; i++) {
            out = out * arr[i]
        } break;
    default:
        throw ('Not a valid operator.')
}
console.log('The answer is: ' + out);