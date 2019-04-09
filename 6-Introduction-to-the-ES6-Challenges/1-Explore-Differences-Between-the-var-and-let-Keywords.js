/* This is the first time I've ever seen ES6. I've used jQuery before, it's nice that these options to expand javascript is available withouth having to import libraries, even if its something common like jQuery */

let catName;
let quote;
function catTalk() {
  "use strict";

  catName = "Oliver";
  quote = catName + " says Meow!";

}
catTalk();