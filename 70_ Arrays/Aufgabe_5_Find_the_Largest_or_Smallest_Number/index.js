let arr = [87, 97, 1021, 102, 34];
let a = 0;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > a) {
    a = arr[i];
  }
}

console.log(a);
