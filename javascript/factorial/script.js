// Find out the factorialized number of a inputted positive(+) number.
function factorialize(num) {
    if (num < 0)
        return "Undefined";
    var factorialize = 1;
    for (var i = num; i > 1; i--)
        factorialize *= i;
    return factorialize;
}

// Write the selected positive(+) number(20) you want factorialized to the console.
console.log(factorialize(20));

// Find out the factorialized number of an inputted negative(-) number.
function factorializeNeg(num) {
    if (num > 0)
        return "Undefined";
    var factorializeNeg = 1;
    for (var i = num; i < -1; i++)
        factorializeNeg *= i;
    return factorializeNeg;
}

// Write the selected negative(-) number(-20) you want factorialized to the console.
console.log(factorializeNeg(-20));