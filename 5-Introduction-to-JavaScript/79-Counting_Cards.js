/* This is another module that took me hours to try and solve. This was also the first module that force me to look up a hint to figure out. Normally I wouldn't mind taking my time doing working on something like this but I was starting to run out of time and I had no idea how hard the next modules would be  */

var count = 0;

function cc(card) {
  // Only change code below this line
  switch (card) {

    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count++;
      if (count > 0){
      return count + " Bet";
      } else
      return count + " Hold";
    break;

    case 7:
    case 8:
    case 9:
    
    if (count > 0){
      return count + " Bet";
      } else
      return count + " Hold";
    break;

    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
    count--;
      if (count > 0){
      return count + " Bet";
      } else
      return count + " Hold";
    break;

  }
  
  return "Change Me";
  // Only change code above this line
}

// Add/remove calls to test your function.
// Note: Only the last will display
cc(2); cc(3); cc(7); cc('K'); cc('A');