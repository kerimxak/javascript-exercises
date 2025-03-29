const reverseString = function(word) {
  let array = word.split("")
  let reverseArray = []
  for (let index = 0; index < array.length; index++) {
    reverseArray[array.length - 1 - index] = array[index]
    
  }
  
  let reverseWord = reverseArray.join("")
  return reverseWord
};



// Do not edit below this line
module.exports = reverseString;
