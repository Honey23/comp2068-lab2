const operations = require('./operations.js');
const readline = require('readline');

// Using readline to create command line interface
const math = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`
Calc.js
This app will allow you to put 2 numbers and perform math operations 
`);

math.question('Enter the first number: ', (x) => {
  math.question('Enter the second number: ', (y) => {
    math.question(`
Please select from the following options:

[1] Addition (+)
[2] Subtraction (-)
[3] Multiplication (*)
[4] Division (/)

Enter your choice: `, (numbers) => {
      if (!operations.validateNumbers(x, y)) {
        console.log('Only numbers are allowed');
      } else {
        switch (numbers) {
          case '1':
            console.log(`The sum of ${x} and ${y} is ${operations.add(x, y)}.`);
            break;
          case '2':
            console.log(`The difference of ${x} and ${y} is ${operations.subtract(x, y)}.`);
            break;
          case '3':
            console.log(`The product of ${x} and ${y} is ${operations.multiply(x, y)}.`);
            break;
          case '4':
            console.log(`The quotient of ${x} and ${y} is ${operations.divide(x, y)}.`);
            break;
          default:
            console.log('**** just numbers are valid ***');
            break;
        }
      }
      math.close();
    });
  });
});