/* I have to confess by this time I was little burned out. I know that I really really want to code but my failure to maintain focus through out this whole preworked really made me question if I have what it takes to be a coder. I know I can learn this but I'm not sure what it's actually like to code for a living. I'll I've ever done was self taught classes */

function makeClass() {
  "use strict";
  /* Alter code below this line */
  class Thermostat {
    constructor(farenheit){
      this.farenheit = farenheit;
    }
    get temperature(){
      return 5 / 9 * (this.farenheit - 32);
    }
    set temperature(celsius){
      this.farenheit = celsius * 9.0 / 5 + 32;
    }
  }
  /* Alter code above this line */
  return Thermostat;
}
const Thermostat = makeClass();
const thermos = new Thermostat(76); // setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in C
thermos.temperature = 26;
temp = thermos.temperature; // 26 in C