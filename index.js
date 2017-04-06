// One of the simplest and most widely known ciphers is a 
// Caesar cipher, also known as a shift cipher. In a shift cipher the meanings 
// of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the 
// letters are shifted by 13 places. Thus 'A' ↔ 'N', 'B' ↔  'O' and so on.

// Write a function which takes a ROT13 encoded string as input 
// and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic 
// character (i.e. spaces, punctuation), but do pass them on.

function rot13(str) { // LBH QVQ VG!
  var rinseArray = [99, 100, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74];
  
  // Store original string values
  var locator = [];

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

    return removal(catchArr);

  } //resetItems Ends

  return(resetItems(locator));

}

//Got to cleaning the array and returning it.
// Also have rinseArray for -10 assistance

console.log(rot13("SERR PBQR PNZC"));

