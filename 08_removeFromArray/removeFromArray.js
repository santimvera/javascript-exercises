const removeFromArray = function (anArray, ...valuesToRemove) {
    return anArray.filter(item => !valuesToRemove.includes(item));
};

// Do not edit below this line
module.exports = removeFromArray;
