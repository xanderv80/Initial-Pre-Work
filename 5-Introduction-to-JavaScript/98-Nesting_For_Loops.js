/* Its to bad about this time of the course I was starting to get a little burn out, I knew I was running out of time to turn in the prework but I also knew that I wanted to think about these lessons about how they would work in the real world */

function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line
  for (var i=0; i < arr.length; i++) {

    for (var j=0; j < arr[i].length; j++) {
      product = product * arr[i][j];
    }

  }


  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([[1,2],[3,4],[5,6,7]]);
