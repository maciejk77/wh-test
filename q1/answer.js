var text = "Welcome to William Hill \n\n Enjoy the test"; 
var newArray = [];

function getInitialEl(text) {
  var initialArray = text.split('\n'); 
// => ["Welcome to William Hill ", "", " Enjoy the silence"]
  getReversedEl(initialArray);
}

function getReversedEl(initialArray) {
  for(var i = 0; i < initialArray.length; i++) {
    var reversedEl = initialArray[i].split(' ').reverse().join(' ');
    newArray.push(reversedEl);
  }
}

newArray.join(' ');
