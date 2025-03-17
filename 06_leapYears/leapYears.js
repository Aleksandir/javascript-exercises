const leapYears = function (year) {
  if (!Number.isInteger(year)) {
    return "ERROR";
    //to make this cleaner you could declare constants above and name the variables what you are checking for such as "isCentury = year % 100 === 0;"
  } else if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    return true;
  } else {
    return false;
  }
};

// Do not edit below this line
module.exports = leapYears;
