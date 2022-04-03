function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

let inputString = prompt("How long would you like to run the bot? (In minutes)");

// check if inputString does not exists or is not a number
while (!inputString || isNaN(inputString)) {
  if (!inputString) inputString = prompt("Invalid inputString. Empty Field:");
  else inputString = prompt("Invalid inputString. Please enter a number:");
}

// parse inputString to int and multiply by 60,000ms to get minutes
const playTime = parseInt(inputString, 10) * 60 * 1000;

// boolean to determine end of playTime
let isActive = true;
setTimeout(() => (isActive = false), playTime);

// get cookie element
let cookie = document.getElementById("bigCookie");

// Play loop
async function play(loopTimes = 100, sleepTime = 1) {
  while (isActive) {
    for (i = 0; i < loopTimes; i++) {
      cookie.click();
      await sleep(sleepTime);
    }
  }
}

play();
