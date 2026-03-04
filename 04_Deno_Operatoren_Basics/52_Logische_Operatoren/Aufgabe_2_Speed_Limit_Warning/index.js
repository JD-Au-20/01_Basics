let speed = parseInt(prompt("How fast do you drive in km/h"));
let trafficLevel = parseInt(
  prompt("Whats the level of the traffic from 1 to 10")
);

if (speed > 80 || trafficLevel > 7) {
  console.log("Slow a little bit down for your own saftey");
} else {
  console.log(
    "You are totally fine if you want you can drive a little bit faster"
  );
}
