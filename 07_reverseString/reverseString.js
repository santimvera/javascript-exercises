const reverseString = function (aString) {
    let reversedString = [];
    for (const char of aString) { reversedString.unshift(char); }
    return reversedString.reduce((sum, current) => sum + current, '');
};

// Do not edit below this line
module.exports = reverseString;
