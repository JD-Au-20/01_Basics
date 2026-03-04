let count = parseInt(prompt("How many Numbers to you want to enter: "));
let sum = 0;

for (let i = 1; i <= count; i++) {
  sum += parseInt(prompt("Number " + i));

  console.log(sum / count);
}
