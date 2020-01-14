const input = require('./userInput');

exports.perform = function() {
    const strinput = input.ask("Please enter a string: ");
    const vowels = count_vowels(strinput);
    show_counts(vowels);
}

function count_vowels(strinput){
    var vowel_counts = {A : 0, E : 0, I : 0, O : 0, U : 0};
    for (var i = 0; i < strinput.length; i++) {
        if (strinput[i] == 'A' || strinput[i] == 'a') {
            vowel_counts.A += 1;
        } else if (strinput[i] == 'E' || strinput[i] == 'e') {
            vowel_counts.E += 1;
        } else if (strinput[i] == 'I' || strinput[i] == 'i') {
            vowel_counts.I += 1;
        } else if (strinput[i] == 'O' || strinput[i] == 'o') {
            vowel_counts.O += 1;
        } else if (strinput[i] == 'U' || strinput[i] == 'u') {
            vowel_counts.U += 1;
        }
    }
    return vowel_counts;
}

function show_counts(vowel_counts) {
    output =`The vowel counts are:\n `;
    for (var i in vowel_counts) {
        if (vowel_counts.hasOwnProperty(i)){
            output += ` ${i} = ${vowel_counts[i]}\n `;
        }
    }
    console.log(output);
}