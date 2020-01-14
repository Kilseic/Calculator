const input = require('./userInput');
const arithmetic = require('./arithmetic');
const vowelCounting = require('./vowelCounting');

const ARITHMETIC_MODE = '1';
const VOWEL_COUNTING_MODE = '2';

printWelcomeMessage();
while (true) {
  const calculationMode = getCalculationMode();
  if (calculationMode === ARITHMETIC_MODE) {
    arithmetic.perform();
  } else if (calculationMode === VOWEL_COUNTING_MODE) {
    vowelCounting.perform();
  }
}

function getCalculationMode() {
    return input.ask(`Which calculator mode do you want?\n 1) Arithmetic\n 2) Vowel Counting`);
}

function printWelcomeMessage() {
    console.log('Welcome to the calculator!');
    console.log('==========================');
}