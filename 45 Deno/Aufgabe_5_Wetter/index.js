let temparatur = parseInt(prompt("What temparatur is outside"));

if (temparatur < 5) {
  console.log("You should stay inside");
} else if (temparatur < 15) {
  console.log("You should wear warm clothes");
} else if (temparatur < 23) {
  console.log("You should go outside with friends");
} else if (temparatur < 30) {
  console.log("Go baden");
} else if (temparatur > 35) {
  console.log("Take a ice bath");
}
