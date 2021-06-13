// Variables
// Canvases
let bgCanvas = document.getElementById("bg");
let l1Canvas = document.getElementById("l1");
let l2Canvas = document.getElementById("l2");

// Contexts
let bgContext = bgCanvas.getContext("2d");
let l1Context = l1Canvas.getContext("2d");
let l2Context = l2Canvas.getContext("2d");

// Parameters
let height = window.innerHeight;
let width = window.innerWidth;
let radius = height;
let lineWidth = 20;
let lineGap = 20;
let speed = 0.4;
let bend;

let isControlOpen = true;

function toggleControls() {
  let form = document.querySelector(".form");
  let toggle = document.querySelector(".toggle");
  if (isControlOpen) {
    form.style.display = "none";
    toggle.innerHTML = "<img src=\"./arrowRight.svg\"/>";
  } else {
    form.style.display = "grid";
    toggle.innerHTML = "<img src=\"./arrowLeft.svg\"/>";
  }
  isControlOpen = !isControlOpen;
}

function init() {
  width = window.innerWidth;
  height = window.innerHeight;
  bgCanvas.width = width;
  bgCanvas.height = height;
  l1Canvas.width = width;
  l1Canvas.height = height;
  l2Canvas.width = width;
  l2Canvas.height = height;

  document.getElementById("bend").min = height / 2 + lineWidth;
  document.getElementById("bend").max = height;
  radius = document.getElementById("bend").value;
  speed = document.getElementById("speed").value;
  // lineWidth = document.getElementById("lineWidth").value;
  // lineGap = document.getElementById("lineGap").value;

  bgContext.beginPath();
  bgContext.rect(0, 0, width, height);
  bgContext.fillStyle = "black";
  bgContext.fill();
}

init();

let xStart = 0;
let xPos = xStart;

function draw() {
  window.onresize = init;
  l1Context.clearRect(0, 0, width, height);
  l2Context.clearRect(0, 0, width, height);

  function drawArc(x) {
    l1Context.beginPath();
    l1Context.arc(x, height / 2, radius, 0.5 * Math.PI, 1.5 * Math.PI);
    l1Context.strokeStyle = "red";
    l1Context.lineWidth = lineWidth;
    l1Context.stroke();

    l2Context.beginPath();
    l2Context.arc(width - x, height / 2, radius, 1.5 * Math.PI, 0.5 * Math.PI);
    l2Context.strokeStyle = "black";
    l2Context.lineWidth = lineWidth;
    l2Context.stroke();
  }

  const lineCount = (width + height) / (lineWidth + lineGap) + 1;

  for (let i = 0; i < lineCount; i++) {
    drawArc(xPos + i * (lineWidth + lineGap));
  }

  xPos -= speed;

  if (xPos <= xStart - lineWidth - lineGap) {
    xPos = xStart;
  }

  window.requestAnimationFrame(draw);
}

draw();
