/* I always enjoy seeing array.length used in such a functional way but this goes beyond what I would have thought about adding the sum of an array. It's weird that I find code like this beautiful.  */

// Example
var ourArr = [ 9, 10, 11, 12];
var ourTotal = 0;

for (var i = 0; i < ourArr.length; i++) {
  ourTotal += ourArr[i];
}

// Setup
var myArr = [ 2, 3, 4, 5, 6];

// Only change code below this line

var total = 0;

for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}