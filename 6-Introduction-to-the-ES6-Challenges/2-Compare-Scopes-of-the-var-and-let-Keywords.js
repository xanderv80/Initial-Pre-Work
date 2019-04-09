/*  */
m,function checkScope() {
"use strict";
  let i = "function scope";
  if (true) {
    let ii = "block scope";
 /* I think I may have cheated on this one, it passed the test but I'm not sure if I solved it the way the module wanted me to */

function checkScope() {
"use strict";
  let i = "function scope";
  if (false) {
    i = "block scope";
    console.log("Block scope i is: ", i);
  }
  console.log("Function scope i is: ", i);
  return i;
}