r1.on('line', function(line) {
    if (line == '') {
        r1.close();
    } // Clear the previous timeout if a new line is received
    inputLines.push(line);
    console.log(line);

});

r1.on('close', function() {
    // Iterate through all the values in inputLines after r1 is closed

    

    for (let i = 0; i < inputLines.length; i++) {
        console.log(inputLines[i]);
    }
});
