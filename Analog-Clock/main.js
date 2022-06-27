// current.toLocaleTimeString();

// Function for Displaying Time
function display_ct() {
  var current = new Date();
  var currHour = current.getHours();
  var currMin = current.getMinutes();
  var currSec = current.getSeconds();

  var currHour = currHour > 12 ? currHour - 12 : currHour;
  var currMin = currMin < 10 ? "0" + currMin : currMin;
  var currSec = currSec < 10 ? "0" + currSec : currSec;
  var zone = current.getHours() >= 12 ? "PM" : "AM";

  document.getElementById("time-div").textContent =
    currHour + " : " + currMin + " : " + currSec + " " + zone;
  // timeDiv.
  setTimeout("display_ct()", 100);
}

// Toggle Full Screen
var elem = document.documentElement;

function toggleFullscreen() {
  if (btn.textContent.includes("Exit")) {
    document.exitFullscreen();
    btn.textContent = "Full Screen";
  } else {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      /* Safari */
      elem.webkitRequestFullscreen();
    }
    btn.textContent = "Exit Full Screen";
  }
}
