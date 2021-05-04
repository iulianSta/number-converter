// Declare selector variables
const result = document.querySelector(".result");
const userInput = document.querySelector("#userInput");
const leftCol = document.querySelector(".left");
const rightCol = document.querySelector(".right");
const form = document.querySelector("form");
let userNumber = 0;
function userValue(e) {
  userNumber = e.target.value;
}
function convert() {
  let currentValue;
  switch ((leftCol.value, rightCol.value)) {
    case "integer":
      currentValue = parseInt(userNumber);
      break;
    case "decimal":
      currentValue = userNumber.toFixed(2);
      break;
    case "hexadecimal":
      currentValue = userNumber.toString(16);
      break;
    default:
      if (userInput == "") userInput.placeholder = `Please type a number`;
  }
  result.innerHTML = `${currentValue}`;
}
