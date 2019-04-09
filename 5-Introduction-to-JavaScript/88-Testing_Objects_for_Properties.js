/* This method confused me at first because of how long the name is for the method is. Most of the time inbuilt methods has short names, this made me think it was custom instead of part of the base code  */

// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  if (myObj.hasOwnProperty(checkProp)) {

    return myObj[checkProp];

  } else {
  // Your Code Here
  
  return "Not Found";
  }
};

// Test your code by modifying these values
checkObj("gift");