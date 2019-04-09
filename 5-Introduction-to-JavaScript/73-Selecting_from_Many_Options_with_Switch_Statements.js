/* I have even less luck getting complex swtich statements to work than I do with chained else if. I understand the basic concept but often times some of my swtich functions don't work out the way I think they should. I like the way switch statements look better than a chain of else ifs */

function caseInSwitch(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;

  }
  
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
caseInSwitch(1);
