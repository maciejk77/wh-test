var arr = [];
var arrNew = [];

function getCombinations(numberX, numberY) {
  var diff = numberY - numberX;
  for(var x = 0; x < diff + 1; x++) {
    var elx = numberX + x
    
    for(var y = 0; y < diff + 1; y++) {
      var ely = numberX + y
      arr.push(elx)
      arr.push(ely)
      // console.log(elx);
      // console.log(ely);
    }
  }
getValues(arr);
};


var arrNew = [];
var arr = [2, 2, 2, 3, 2, 4, 3, 2, 3, 3, 3, 4, 4, 2, 4, 3, 4, 4];

// function getValues() {
  for(var i = 0; i < arr.length; i = i + 2) {
    console.log(i);
    var el = Math.pow(arr[i], arr[i + 1]);
    console.log(el);
   // arr.splice([0], 2);
    console.log(arr);
    arrNew.push(el);
    console.log(arrNew); 
  }
  // arrNew.sort();
// }
// getValues();

// getCombinations(2, 4);
