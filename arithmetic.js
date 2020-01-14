const input = require('./userInput');

exports.perform = function() {
    const op = input.ask('Please enter the operator: ');
    const n = +input.ask(`How many numbers would you like to ${op}?`);
    let arr = collectNumbers(n);
    operate(arr, op, n);
}

function operate(array, operator, amount){
    var out = array[0];
    switch (operator) {
        case '+':
            out = array.reduce(function(accumulator, value) {return accumulator + value}, 0)
            break;
        case '-':
            out = (array.slice(1,)).reduce(function(accumulator, value) {return accumulator - value}, out)
            break;
        case '/':
            out = ((array.filter(function(item) { return item != 0; })).slice(1,)).reduce(function(accumulator, value) {return accumulator / value}, out)
            break;
        case '*':
            out = array.reduce(function(accumulator, value) {return accumulator * value}, 0)
            break;
        default:
            throw ('Not a valid operator.')
        }
    console.log('The answer is: ' + out);
}

function collectNumbers(amount){
    let temp = [];
    for (let i = 0; i < amount; i++) {
        temp[i] = +input.ask('Please enter number ' + (i+1) +': ');
        if (isNaN(temp[i])){
            console.log('Sorry, please enter a valid number.');
            i -= 1;
        }
    }
    return temp;
}