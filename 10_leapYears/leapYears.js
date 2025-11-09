const leapYears = function(aNumber) {
    if (aNumber % 4 === 0) {
        if (aNumber % 100 === 0) {
            if (aNumber % 400 === 0) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    } else {
        return false;
    }   

};

// Do not edit below this line
module.exports = leapYears;
