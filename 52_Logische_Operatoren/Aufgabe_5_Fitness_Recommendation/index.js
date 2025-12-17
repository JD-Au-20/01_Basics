let heartRate = parseInt(prompt("What is your heart rate in bpm"));
let age = parseInt(prompt("How old are you unc"));

if (age < 30 && heartRate < 100) {
  console.log("Light exercise");
} else if (age >= 30 && heartRate >= 80 && heartRate <= 120) {
  console.log("Moderate exercise");
} else {
  console.log("Consult a doctor before exercise");
}
