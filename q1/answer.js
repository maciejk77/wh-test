// Declaration of string with new lines and empty array
// I was unable to push this text from input.txt via stdout methods or similar
// Final result will be printed to console log

var text = "Welcome to William Hill \n\n Enjoy the test"; 
var newArray = [];

// Function to get text string split to array
function getInitialEl(text) {
  var initialArray = text.split(/(?=\n)/); 
// => ["Welcome to William Hill ", "", " Enjoy the silence"]
  getTrimmedEl(innitialArray)
}
  
// Function to remove spaces at the begining and of the array elements
function getTrimmedEl(initialArray) {
  for(var i = 0; i < initialArray.length; i++) {
    initialArray[i] = initialArray[i].trim() 
  }
  getReversedEl(initialArray);
}

// Reversing order of elements in the array, by spliting/reversing/joining and pushing to new array
function getReversedEl(initialArray) {
  for(var i = 0; i < initialArray.length; i++) {
    var reversedEl = initialArray[i].split(' ').reverse().join(' ');
    newArray.push(reversedEl);
  }
}

// Merging newArray elements to new text string
var newText = newArray.join(' ');
// Printing final text to console.log
console.log(newText);