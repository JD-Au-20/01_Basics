let clickCount = 0;
const saoElement = document.getElementById("Sao");

document.getElementById("skibidi").addEventListener("click", function () {
  clickCount++;

  if (clickCount === 1) {
    saoElement.innerHTML = "süper";
  } else if (clickCount === 2) {
    saoElement.classList.add("john");
  }
});
