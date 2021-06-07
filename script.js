const height = window.innerHeight;
const width = window.innerWidth;
const lineWidth = 20;

var c = document.getElementById("bg");
var bg = c.getContext("2d");

var c2 = document.getElementById("l1");
var l1 = c2.getContext("2d");

var c3 = document.getElementById("l2");
var l2 = c3.getContext("2d");

// Background
bg.beginPath();
bg.rect(0, 0, width, height);
bg.fillStyle = "black";
bg.fill();


const xStart = width + height + lineWidth / 2;
var xPos = xStart;
function draw() {
  l1.clearRect(0, 0, width, height);

  function drawArc(x) {
    l1.beginPath();
    l1.arc(x, height / 2, height, 0.5 * Math.PI, 1.5 * Math.PI);
    l1.strokeStyle = "red";
    l1.lineWidth = lineWidth;
    l1.stroke();
  }

  if (xStart - (xPos % lineWidth) * 2) {
    drawArc(xPos + lineWidth * 2);
  }
  drawArc(xPos);
  xPos -= 1;

  window.requestAnimationFrame(draw);
}

draw();
