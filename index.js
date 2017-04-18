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
  // Pre rinsed Array
  var preRinsed;

  // Forloop for original unicode conversion
  for (var i = 0; i <= str.length; i++) {
  		locator.push(str.charCodeAt(i));
  };

  //Remove sting spaces i.e: 32
  function cleanLocator(value) {
    return value != 32;
  }

  //Cleaned array for reset step
  var cleanLocator = locator.filter(cleanLocator);

  //Reset charcode reference
  function resetItems(arr){

    var x;
    var catchArr = [];

    for (var i = 0; i < arr.length; i++) {
      //This if statement removes empty spaces 32's and 42's 
      //from the array 
      if(arr[i] != 32){
        x = arr[i] + 10;
        catchArr.push(x);
        x = 0;         
      }

    }; //for loop ends

    // This removes all falsey values from the Array
    // including NaN
    function removal(arr) {
      return arr.filter(Boolean);
    }

    preRinsed = removal(catchArr);

  } //resetItems Ends

  //Function that checks for -10 values that go beyond charcode values
  function shiftValues(arr){

    var copy = [];

    for (var i = 0; i < arr.length; i++) {

      if (arr[i] > 84 ) {
        copy.push(arr[i] - 10);
      };
      
      if (arr[i] < 84) {
        copy.push(arr[i] + 16);
      };

    }

    return copy;

  }

  resetItems(locator);

  // Fixed numvers and placement. now converting back to letters with 
  function backToLetters(){

  }


  console.log(preRinsed);
  return shiftValues(preRinsed);

}


console.log(rot13("SERR PBQR PNZC"));

