const readline = require('readline-sync');

exports.ask = function(question){
    console.log(question);
    return readline.prompt();
}