// Your code here


function moveDodgerLeft() {
    const dodger = document.getElementById('dodger');
    const leftPosition = parseInt(dodger.style.left);
    if (leftPosition > 0) {
      dodger.style.left = `${leftPosition - 4}px`;
    }
  }
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }
    if (e.key === "ArrowRight") {
      moveDodgerRight();
    }
  });
  
  function moveDodgerRight() {
    const dodger = document.getElementById('dodger');
    const leftPosition = parseInt(dodger.style.left);
    if (leftPosition < 360) {
      dodger.style.left = `${leftPosition + 4}px`;
    }
  }
  