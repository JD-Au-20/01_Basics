let number1 = parseInt(prompt("Gib die erste Zahl ein:"));
let number2 = parseInt(prompt("Gib die zweite Zahl ein:"));
let selection = parseInt(
  prompt("1 Add, 2 Subtract, 3 Divided, 4 Multiplicate")
);
let result = 0;

if (selection == 1) {
  result = number1 + number2;
}

if (selection == 2) {
  result = number1 - number2;
}

if (selection == 3) {
  result = number1 / number2;
}

if (selection == 4) {
  result = number1 * number2;
}
console.log(result);
