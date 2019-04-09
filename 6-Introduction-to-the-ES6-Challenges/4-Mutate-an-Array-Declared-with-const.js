/* So s can't be changed but content in the array can? I suppose its nice to lock down certain parts of the object in question  */

const s = [5, 7, 2];
function editInPlace() {
  "use strict";
  // change code below this line

  s[0] = 2; //<- this is invalid
  s[1] = 5;
  s[2] = 7;

  // change code above this line
}
editInPlace();