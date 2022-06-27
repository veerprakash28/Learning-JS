let bulb = document.getElementById("bulb");
let btn = document.getElementById("toggleBtn");

btn.addEventListener("click", toggleBulb);

function toggleBulb(e) {
  if (btn.textContent.includes("On")) {
    bulb.src = "img/bulb-on.jpg";
    btn.textContent = "Turn Off";
  } else {
    bulb.src = "img/bulb-off.jpg";
    btn.textContent = "Turn On";
  }
}
