const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const processData = (x) => {
    let originalNumber = x;
    console.log(`${originalNumber} base 10`);
    let currentNumber = parseInt(originalNumber, 10);

    while (true) {
        let smallestBase = findSmallestBase(originalNumber);
        let newNumber = parseInt(originalNumber, smallestBase);

        if (newNumber === currentNumber || smallestBase === 10) break;

        console.log(`${newNumber} base ${smallestBase}`);
        currentNumber = newNumber;
        originalNumber = currentNumber.toString();
    }

    console.log(currentNumber + '\n');
};

const findSmallestBase = (numberAsString) => {
    let maxDigit = Math.max(...numberAsString.split('').map(digit => parseInt(digit, 10)));
    return maxDigit + 1;  // Smallest base to decode the number
};

let numberOfDatasets = 0;
let count = 0;

rl.on('line', (line) => {
    if (numberOfDatasets === 0) {
        numberOfDatasets = parseInt(line, 10);
    } else {
        processData(line);
        count++;
        if (count === numberOfDatasets) {
            rl.close();
        }
    }
}).on('close', () => {
    process.exit(0);
});
