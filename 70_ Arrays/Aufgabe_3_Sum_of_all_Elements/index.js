let arr = [3, 7, 4, 3, 7, 9, 8];
let sum = 0;

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  sum = sum += arr[i];
}
console.log(sum);
