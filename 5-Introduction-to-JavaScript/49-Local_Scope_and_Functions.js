/*  This is the first time I see 'use strict'. They didn't explain it in the module, they just added in the code. I think this is the first speedbump I hit in the prework. Up until now I was flyig through the modules. This made me pause and wonder if I had skipped something*/

function myLocalScope() {
  'use strict'; // you shouldn't need to edit this line
  var myVar = "foo";
  console.log(myVar);
}
myLocalScope();

// Run and check the console
// myVar is not defined outside of myLocalScope
//console.log(myVar);

// Now remove the console log line to pass the test
