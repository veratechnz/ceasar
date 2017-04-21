// One of the simplest and most widely known ciphers is a 
// Caesar cipher, also known as a shift cipher. In a shift cipher the meanings 
// of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the 
// letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.

// Write a function which takes a ROT13 encoded string as input 
// and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic 
// character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) {

  // Store original string values
  var locator = [];

  // Forloop for original unicode conversion
  for (var i = 0; i <= str.length; i++) {
  		locator.push(str.charCodeAt(i));
  };

  //Function that checks for -10 values that go beyond charcode values
  function cipherEngine(arr){

    var copy = [];

    for (var i = 0; i < arr.length; i++) {

      //Most ceasars cypher numbers work if 10 is subtracted
      if (arr[i] > 0 && arr[i] < 42) {
        copy.push(arr[i]);
      };

      //Most ceasars cypher numbers work if 10 is subtracted
      if (arr[i] > 64 && arr[i] < 78) {
        copy.push(arr[i] + 13);
      };
      
      //Adding 16 creates a loop within specific charcode values
      if (arr[i] > 77) {
        copy.push(arr[i] - 13);
      };

    }

    // Fixed numvers and placement. now copynverting back to letters with 
    function backToLetters(arr){

      var getter = [];

      for (var i = 0; i < arr.length; i++) {
        getter.push(String.fromCharCode(arr[i])); 
      }

      return getter;

    }

    var result = backToLetters(copy);
    var finalize = result.join(''); 

    return finalize;

  } //shiftValues ends

  return cipherEngine(locator);

}

console.log(rot13("SERR CVMMN!"));

