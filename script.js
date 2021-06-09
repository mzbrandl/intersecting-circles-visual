const height = window.innerHeight;
const width = window.innerHeight;
const lineWidth = 50;

var c = document.getElementById("bg");
c.width = width;
c.height = height;
var bg = c.getContext("2d");

var c2 = document.getElementById("l1");
c2.width = width;
c2.height = height;
var l1 = c2.getContext("2d");

var c3 = document.getElementById("l2");
c3.width = width;
c3.height = height;
var l2 = c3.getContext("2d");

// Background
bg.beginPath();
bg.rect(0, 0, width, height);
bg.fillStyle = "black";
bg.fill();

const xStart = width + height + lineWidth * 2;
const xStart2 = 0 - height - lineWidth * 2;
var xPos = xStart;
var xPos2 = xStart2;
const speed = 0.4;

function draw() {
  l1.clearRect(0, 0, width, height);

  function drawArc(x) {
    l1.beginPath();
    l1.arc(x, height / 2, height, 0.5 * Math.PI, 1.5 * Math.PI);
    l1.strokeStyle = "red";
    l1.lineWidth = lineWidth;
    l1.stroke();
  }

  const lineCount = width / lineWidth / 2 + 10; // 10 extra lines for corners
  for (let i = 0; i < lineCount; i++) {
    drawArc(xPos - i * lineWidth * 2);
  }

  xPos -= speed;

  if (xPos <= xStart - lineWidth * 2) {
    xPos = xStart;
  }

  window.requestAnimationFrame(draw);
}

function draw2() {
  l2.clearRect(0, 0, width, height);

  function drawArc2(x) {
    l2.beginPath();
    l2.arc(x, height / 2, height, 1.5 * Math.PI, 0.5 * Math.PI);
    l2.strokeStyle = "black";
    l2.lineWidth = lineWidth;
    l2.stroke();
  }

  const lineCount = width / lineWidth / 2 + 10; // 10 extra lines for corners

  for (let i = 0; i < lineCount; i++) {
    drawArc2(xPos2 + i * lineWidth * 2);
  }

  xPos2 += speed;

  if (xPos2 >= xStart2 + lineWidth * 2) {
    xPos2 = xStart2;
  }

  window.requestAnimationFrame(draw2);
}

draw();
draw2();
