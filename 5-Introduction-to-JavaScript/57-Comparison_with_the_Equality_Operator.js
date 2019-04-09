/* I still forget sometimes the difference between == and === because of how I understand += or -=.  */

// Setup
function testEqual(val) {
  if (val == 12) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testEqual(10);