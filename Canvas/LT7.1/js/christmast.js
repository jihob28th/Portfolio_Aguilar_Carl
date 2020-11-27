var canvas = document.getElementById("christmast")
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
ctx.rect(95, 140, 10, 40);
ctx.stroke();
ctx.fillStyle = "brown";
ctx.fill();

ctx.beginPath();
ctx.moveTo(40, 160);
ctx.lineTo(100, 90);
ctx.lineTo(160, 160);
ctx.fillStyle = "#07330f";
ctx.fill();

ctx.beginPath();
ctx.moveTo(50, 140);
ctx.lineTo(100, 70);
ctx.lineTo(150, 140);
ctx.fillStyle = "#0f4011";
ctx.fill();

ctx.beginPath();
ctx.moveTo(60, 120);
ctx.lineTo(100, 50);
ctx.lineTo(140, 120);
ctx.fillStyle = "#1a6a1e";
ctx.fill();

ctx.beginPath();
ctx.moveTo(67, 100);
ctx.lineTo(100, 40);
ctx.lineTo(133, 100);
ctx.fillStyle = "#208d28";
ctx.fill();

ctx.beginPath();
ctx.moveTo(90, 45);
ctx.lineTo(100, 55);
ctx.lineTo(110, 45);
ctx.fillStyle = "Yellow";
ctx.fill();

ctx.beginPath();
ctx.moveTo(90, 45);
ctx.lineTo(100, 35);
ctx.lineTo(110, 45);
ctx.fillStyle = "Yellow";
ctx.fill();
