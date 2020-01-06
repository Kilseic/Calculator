const readline = require('readline-sync');
//console.log('Welcome to the calculator, yay!');
console.log('Please enter your first number:');
const response = readline.prompt();
console.log('Please enter your second number:');
const response_2 = readline.prompt();
console.log(+response * +response_2);