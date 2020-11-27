var canvas = document.getElementById("yinyang")
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
ctx.arc(100, 100, 80, 0, 2 * Math.PI);
ctx.stroke();
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(100, 100, 80, 0, 1 * Math.PI);
ctx.stroke();
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(60, 100, 40, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(140, 100, 40, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(60, 100, 15, 0, 2 * Math.PI);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.arc(140, 100, 15, 0, 2 * Math.PI);
ctx.fillStyle = "white";
ctx.fill();