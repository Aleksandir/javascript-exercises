const reverseString = function (string) {
  let reversedString = "";
  for (let charCount = string.length; charCount > -1; charCount--) {
    reversedString += string.charAt(charCount);
  }
  return reversedString;
};

//Could have solved usinf "return string.split("").reverse().join("");""

// Do not edit below this line
module.exports = reverseString;
