/*  This is something not typical in basic math formulas. Even in Excel, there is conditional formatting that has similar multiple layers of comparisions but that is in a gui wtih drop down boxes and rows, not as a formula*/

function testLogicalAnd(val) {
  // Only change code below this line

  if (val <= 50 && val >= 25) {
      return "Yes";  
  }

  // Only change code above this line
  return "No";
}

// Change this value to test
testLogicalAnd(10);