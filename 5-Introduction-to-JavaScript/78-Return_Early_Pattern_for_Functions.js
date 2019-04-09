/* I understand that the math functions isn't really part of this module but up until now I was able to easily understand all of the code. It's not too complicated but they did just throw it in there without any preamble. I know before I was saying the modules were too easy but this made me start to focus more on the solutions instead of trying to understand why the solutions worked */

// Setup
function abTest(a, b) {
  // Only change code below this line
  if (a < 0) {
    return;
  } else if (b < 0) {
    return;
  } else
  
  
  // Only change code above this line

  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

// Change values below to test your code
abTest(2,2);