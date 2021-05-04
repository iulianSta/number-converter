// Declare selector variables
const result = document.querySelector(".result");
const userInput = document.querySelector("#userInput");
const leftCol = document.querySelector("#col1");
const rightCol = document.querySelector("#col2");
const form = document.querySelector("form");
let userNumber = 0;
// userValue function
function userValue(e) {
  userNumber = e.target.value;
}
// convert function
function convert() {
  let currentValue;
  switch ((leftCol.value, rightCol.value)) {
    case "binary":
      currentValue = parseInt(userNumber).toString(2);
      break;
    case "decimal":
      currentValue = parseInt(userNumber).toString(10);
      break;
    case "hexadecimal":
      currentValue = parseInt(userNumber).toString(16);
      break;
    default:
      currentValue = 0;
  }
  //   result.innerHTML = `${currentValue}`;
  return currentValue;
}
// addEventListener
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //console.log(123);
  const value = convert();
  result.innerHTML = value;
});
form.addEventListener("reset", () => {
  result.innerHTML = `Your input has been cleared out`;
});
leftCol.addEventListener("change", convert);
rightCol.addEventListener("change", convert);
userInput.addEventListener("keyup", userValue);
