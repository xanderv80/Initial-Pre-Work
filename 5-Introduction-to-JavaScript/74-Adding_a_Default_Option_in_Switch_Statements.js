/* These few modules were a nice break after being stuck on that golf module for so long. It did give me a false sense of security thinking the worse was over */

function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case "a":
      answer = "apple";
      break;
    case "b":
      answer = "bird";
      break;
    case "c":
      answer = "cat";
      break;
    default:
      answer = "stuff";
      break;

  } 
  
  // Only change code above this line  
  return answer;  
}

// Change this value to test
switchOfStuff(1);
