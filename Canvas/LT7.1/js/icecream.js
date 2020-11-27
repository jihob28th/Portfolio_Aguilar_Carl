var canvas = document.getElementById("icecream")
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
ctx.arc(100, 78, 50, -4, Math.PI, false);  
ctx.moveTo(65, 65);
ctx.fillStyle = "pink";
ctx.fill();

ctx.beginPath();
ctx.moveTo(50, 90);
ctx.lineTo(100, 180);
ctx.lineTo(150, 90);
ctx.fillStyle = "#f6f193";
ctx.fill();

ctx.beginPath();
ctx.moveTo(110, 100);
ctx.lineTo(72, 130);
ctx.strokeStyle = "white";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(145, 100);
ctx.lineTo(83, 150);
ctx.stroke();

ctx.beginPath();
ctx.moveTo(115, 152);
ctx.lineTo(94, 170);
ctx.stroke();

ctx.beginPath();
ctx.arc(60, 90, 20, 0, 2 * Math.PI);
ctx.fillStyle = "pink";
ctx.fill();

ctx.beginPath();
ctx.arc(140, 90, 20, 0, 2 * Math.PI);
ctx.fillStyle = "pink";
ctx.fill();

ctx.beginPath();
ctx.arc(90, 90, 15, 0, 2 * Math.PI);
ctx.fillStyle = "pink";
ctx.fill();

ctx.beginPath();
ctx.arc(110, 90, 15, 0, 2 * Math.PI);
ctx.fillStyle = "pink";
ctx.fill();




