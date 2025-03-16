const repeatString = function (string, num) {
  let repeatedString = "";
  if (num > -1) {
    for (let i = 1; i <= num; i++) {
      repeatedString = repeatedString + string;
    }
    return repeatedString;
  } else return "ERROR";
};

// Do not edit below this line
module.exports = repeatString;
