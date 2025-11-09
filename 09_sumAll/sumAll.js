const sumAll = function (numberOne, numberTwo) {
    if (numberOne === numberTwo) return numberOne;
    if (numberOne < 0 || numberTwo < 0) return 'ERROR';
    if (!Number.isInteger(numberOne) || !Number.isInteger(numberTwo)) return 'ERROR';
    if (typeof numberOne !== 'number' || typeof numberTwo !== 'number') return 'ERROR';
    
    let orderedNumbers = [numberOne, numberTwo].sort((a, b) => a - b);
    let allNumbers = [];
    for (let i = orderedNumbers[0]; i <= orderedNumbers[1]; i++) {
        allNumbers.push(i);
    }
    const sum = allNumbers.reduce((total, current) => total + current, 0);
    return sum;


};

// Do not edit below this line
module.exports = sumAll;
