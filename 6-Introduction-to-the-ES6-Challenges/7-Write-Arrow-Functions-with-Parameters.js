/* So if the arguments can vary then what excatly is const protecting here? It prevents the structure of the function from changing?  */

const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));