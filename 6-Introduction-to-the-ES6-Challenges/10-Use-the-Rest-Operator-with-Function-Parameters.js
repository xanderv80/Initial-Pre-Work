/* This was also a bit confusing. So the function takes in a undetermined amount in an array but some how args.reduce((a,b) => a + b, 0) adds them all together?  */

const sum = (function() {
  "use strict";
  return function sum(...args) {
    //const args = [ x, y, z ];
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6