const repeatString = function(stringToBeRepeated, howManyTimes) {
  let result = ''
  if (howManyTimes < 0){
    return "ERROR"
  }
  for (let i = 0; i < howManyTimes; i++) {
    result += stringToBeRepeated
    
  }
  return result
};

// Do not edit below this line
module.exports = repeatString;
