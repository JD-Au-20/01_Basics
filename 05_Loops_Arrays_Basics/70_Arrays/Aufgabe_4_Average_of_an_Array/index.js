let arr = [12, 34, 3, 6, 5, 6];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  sum = sum + arr[i];
}
let average = sum / arr.length;

console.log("The average is :" + average);
