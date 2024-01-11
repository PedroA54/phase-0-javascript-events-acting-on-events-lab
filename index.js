// Your code here
const dodger = document.getElementById("dodger");

dodger.style.backgroundColor = "#000000";

dodger.style.backgroundColor = "#FF69B4";

dodger.style.bottom = "0px";

dodger.style.left = "0px";

dodger.style.right = "0px";

function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const leftPosition = parseInt(dodger.style.left);
    if (leftPosition > 0) {
      dodger.style.left = `${leftPosition - 4}px`;
    }
  }
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const leftPosition = parseInt(dodger.style.left);
    if (leftPosition < 360) {
      dodger.style.left = `${leftPosition + 4}px`;
    }
  }