const readline = require('readline');

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let inputLines = [];

r1.on('line', function(line) {
    if (line == '') {
        r1.close();
    } // Clear the previous timeout if a new line is received
    inputLines.push(line);
    console.log(line);
});

r1.on('close', function() {
    inputLines.forEach(line => {
        const num = parseInt(line, 10);
        const result = findPaliNum(num);
        console.log(result);
    });
});

function findPaliNum(num) {
    let steps = 0;
    while (!isPalindrome(num) && steps < 5) {
        const reversed = parseInt(num.toString().split('').reverse().join(''), 10);
        num += reversed;
        steps++;
    }
    return num;
}

function isPalindrome(num) {
    const str = num.toString();
    return str === str.split('').reverse().join('');
}
