const sumAll = function(num1, num2) {
  let answer = 0
  let from = 0
  let to = 0
  if (num1 < num2) {
    from = num1
    to = num2
  } else {
    from = num2
    to = num1
  }

  if (Number.isInteger(from) && Number.isInteger(to) && from >= 0 && to >= 0){
    for (let i = from; i <= to; i++) {
      answer += i
      
    }
  } else {
    return "ERROR"
  }
  return answer
};

// Do not edit below this line
module.exports = sumAll;
