// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
 * @param {string} fahren temperature in degrees F
 * @returns {number} the number of degrees C
 */
function convertToCelcius(fahren)
{
  return (fahren-32) * 5/9;
}

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function createMessage(fahren, celc) 

{ let feels = '';
if (fahren < 32) {
  feels = `${fahren}F is ${celc}C and that is very cold`;
} else if (fahren < 64) {
  feels = `${fahren}F is ${celc}C and that is cold`;
} else if (fahren < 86) {
  feels =`${fahren}F is ${celc}C and that is warm`;
} else if (fahren < 100) {
  feels = `${fahren}F is ${celc}C and that is hot`;
}
else {
  return "This is invalid Temp.";
}
return feels;
// console.log(`it is ${fahren} (${celc}) but it feels ${feels}.`);
}

/**
 * Takes a number and returns a random integer from 0 to the limit
 * @param {number} limit
 * @returns {number} a number between 0 and the int passed in
 */
function rand(limit) {
  return Math.random()* limit;
}

// -------------------- DONT NOT CHANGE THE CODE BELOW ---------------------- //

let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelcius(fahren);
let output = createMessage(fahren, celc);
console.log(output); //undefined

fahren = prompt(
  "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
);
celc = convertToCelcius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelcius(fahren);
output = createMessage(fahren, celc);
console.log(output);

fahren = rand(110);
celc = convertToCelcius(fahren);
output = createMessage(fahren, celc);
console.log(output);