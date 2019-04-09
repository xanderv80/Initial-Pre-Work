/* I think even this isn't too bad except when there are more than 2 values, when its AND AND or OR OR that I start getting a little confused  */

function testLogicalOr(val) {
  // Only change code below this line

  if (val < 10 || val > 20) {
    return "Outside";
  }


  // Only change code above this line
  return "Inside";
}

// Change this value to test
testLogicalOr(15);