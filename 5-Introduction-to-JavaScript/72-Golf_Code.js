/* This is the first module that I got stuck on. I wish I would have kept my previous wrong attempts. I was stuck on this module for a few hours trying to figure out. This was kinda like the logical order module but more complicated. It was modules like these why it took me so long to do this prework */

var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
  // Only change code below this line
  if (strokes == 1) {
    return names[0];
  } else if (strokes >=par+3){
    return names[6];
  } else if (strokes == par+2) {
    return names[5];
  } else if (strokes == par+1) {
    return names[4];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par-1) {
    return names[2];
  } else if (strokes <= par-2) {
    return names[1];
  } else {
  return "Change Me";
  }
  // Only change code above this line
}

// Change these values to test
golfScore(4, 5);