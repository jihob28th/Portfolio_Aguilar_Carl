var canvas = document.getElementById("injection")
var ctx = canvas.getContext("2d")

ctx.beginPath();
ctx.moveTo(200.0, 200.0);
ctx.lineTo(0.0, 200.0);
ctx.lineTo(0.0, 0.0);
ctx.lineTo(200.0, 0.0);
ctx.lineTo(200.0, 200.0);
ctx.closePath();
ctx.fillStyle = "skyblue";
ctx.fill();

ctx.beginPath();
ctx.rect(95, 140, 10, 20);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.rect(82, 70, 35, 80);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.rect(84, 70, 30, 75);
ctx.fillStyle = "#c8e9f7";
ctx.fill();

ctx.beginPath();
ctx.rect(70, 70, 60, 5);
ctx.fillStyle = "#8e9cbb";
ctx.fill();

ctx.beginPath();
ctx.rect(97, 39, 5, 30);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.rect(85, 38, 30, 5);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.moveTo(100, 175);
ctx.lineTo(100, 160);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(108, 75);
ctx.lineTo(108, 140);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(108, 135);
ctx.lineTo(115, 135);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(108, 130);
ctx.lineTo(115, 130);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(108, 125);
ctx.lineTo(115, 125);
ctx.stroke();


