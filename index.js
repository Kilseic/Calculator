const readline = require('readline-sync');
//console.log('Welcome to the calculator, yay!');
console.log('Please enter your first number:');
const response = readline.prompt();
console.log('Please enter your second number:');
const response_2 = readline.prompt();
const out = +response * +response_2;
console.log(out);