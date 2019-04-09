/* This module was kinda fun, the first time I had to play around with the code before I got it right. I had to think about the values I was comparing, not just the syntax I was using  */

function orderMyLogic(val) {
  if (val < 5) {
    return "Less than 5";
  } else if (val < 10) {
    return "Less than 10";
  } else {
    return "Greater than or equal to 10";
  }
}

// Change this value to test
orderMyLogic(7);