const leapYears = function(year) {
    if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) return true;
    else return false; 
};

// if year is divisible by 4, leap year
    // if year is divisible by 100, not leap year
    // unless divisible by 400 too


// Do not edit below this line
module.exports = leapYears;
