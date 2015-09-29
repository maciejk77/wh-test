var sampleNumbers = [2,4];
var arr = [];

function getVariations(sampleNumbers) {
  var diff = sampleNumbers[1] - sampleNumbers[0];
  for(var i = 0; i < diff; i++) {
    var value = sampleNumbers[0] * sampleNumbers[0+i];
    arr.push(value);
  }
};