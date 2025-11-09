const repeatString = function (aString, aNumber) {
    if (aNumber < 0) return 'ERROR';
    let myString = '';
    for (let i = 0; i < aNumber; i++) {
        myString += aString;
    }
    return myString
};

// Do not edit below this line
module.exports = repeatString;
