const height = 600;
const width = 800;
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

const xStart = width + height + lineWidth * 2;
var xPos = xStart;

function draw(timestamp) {
  l1.clearRect(0, 0, width, height);
  // // if (!start || progress > 400) start = timestamp * -1;
  // progress = Math.floor(start - timestamp / 10);

  // console.log(progress);

  function drawArc(x) {
    l1.beginPath();
    l1.arc(x, height / 2, height, 0.5 * Math.PI, 1.5 * Math.PI);
    l1.strokeStyle = "red";
    l1.lineWidth = lineWidth;
    l1.stroke();
  }
  // drawArc(xPos);
  // drawArc(xPos + lineWidth * 2);
  // drawArc(xPos + lineWidth * 4);
  // drawArc(xPos + lineWidth * 6);
  // drawArc(xPos + lineWidth * 8);
  var pro = xPos;
  while (pro > 0) {
    drawArc(pro - lineWidth * 2);
    pro -= lineWidth * 2;
  }
  // for (let i = 1; i < 100; i++) {
  //   drawArc(xPos + lineWidth * (i * 2));
  // }

  xPos--;

  window.requestAnimationFrame(draw);
}

draw();
