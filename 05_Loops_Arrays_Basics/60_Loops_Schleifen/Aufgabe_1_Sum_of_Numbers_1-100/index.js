let number = 0;
let number1 = 0;

for (let i = 1; i <= 100; i++) {
  number1 += 1;
  number += number1;
}
console.log(number);
