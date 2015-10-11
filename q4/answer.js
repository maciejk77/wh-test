var arr = [];

function getCombinations(numberX, numberY) {
  var diff = numberY - numberX;
  for(var x = 0; x < diff + 1; x++) {
    var elx = numberX + x
    
    for(var y = 0; y < diff + 1; y++) {
      var ely = numberX + y
      arr.push(elx)
      arr.push(ely)
      console.log(elx);
      console.log(ely);
    }
  }
// console.log(arr);
};
// getCombinations(2, 4);
