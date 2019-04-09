/* I've gone through these modules twice, once trying to do the answers, then again with the comments. I didn't want to break the flow of solving problems with my thoughts and comments. That being said, I just now realized the biggest difference between == and === */

// Setup
function testStrict(val) {
  if (val === 7) { // Change this line
    return "Equal";
  }
  return "Not Equal";
}

// Change this value to test
testStrict(10);