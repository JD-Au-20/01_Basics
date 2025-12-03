let score = parseInt(prompt("What is your score"));

if (score > 90) {
  console.log("Grade A");
} else if (score >= 80 && score <= 89) {
  console.log("Grade B");
} else if (score >= 70 && score <= 79) {
  console.log("Grade C");
} else if (score >= 60 && score <= 69) {
  console.log("Grade D");
} else if (score >= 50 && score <= 59) {
  console.log("You failed you could do better");
} else if (score >= 40 && score <= 49) {
  console.log("To you learned a even a little bit?");
} else {
  console.log("Grade E");
}
