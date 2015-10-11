var arr = [];
var arrNew = [];

// Function to return combination of numbers X & Y as per below comment
// [2, 2, 2, 3, 2, 4, 3, 2, 3, 3, 3, 4, 4, 2, 4, 3, 4, 4]
function getCombinations(numberX, numberY) {
  var diff = numberY - numberX;
  for(var x = 0; x < diff + 1; x++) {
    var elx = numberX + x
    
    for(var y = 0; y < diff + 1; y++) {
      var ely = numberX + y
      arr.push(elx)
      arr.push(ely)
    }
  }
getValues();
};

// Function to return array of values as per below comment
// [4, 8, 16, 9, 27, 81, 16, 64, 256]
function getValues() {
  for(var i = 0; i < arr.length; i += 2) {
    var el = Math.pow(arr[i], arr[i + 1]);
    arrNew.push(el);
  }
  // Function to sort results to get array as per below comment
  // [4, 8, 9, 16, 16, 27, 64, 81, 256]
  arrNew.sort(function(a, b) {return a - b});
  getDistinct();
}

// Function to only get distinct numbers in an array
// [4, 8, 9, 16, 27, 64, 81, 256]
function getDistinct() {
  for(var i = 0; i < arrNew.length; i++) {
    if(arrNew[i] === arrNew[i + 1]) {
      arrNew.splice(i, 1);
    }
  }
// Explicitly returns 8 - number of distinct elements in the final array arrNew
return arrNew.length;
}

//Call to execute a sequence of functions, providing lower and upper bounds as arguments
getCombinations(2, 4);
