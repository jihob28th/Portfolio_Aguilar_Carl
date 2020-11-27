var canvas = document.getElementById("sun")
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
ctx.arc(100, 100, 50, 0, 2 * Math.PI);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.moveTo(80, 45);
ctx.lineTo(100, 20);
ctx.lineTo(120, 45);
ctx.fillStyle = "Yellow";
ctx.fill();

ctx.beginPath();
ctx.moveTo(80, 155);
ctx.lineTo(100, 180);
ctx.lineTo(120, 155);
ctx.fillStyle = "Yellow";
ctx.fill();

ctx.beginPath();
ctx.moveTo(45, 120);
ctx.lineTo(20, 100);
ctx.lineTo(45, 80);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.moveTo(155, 120);
ctx.lineTo(180, 100);
ctx.lineTo(155, 80);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.moveTo(160, 40);
ctx.lineTo(155, 75);
ctx.lineTo(125, 45);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.moveTo(35, 40);
ctx.lineTo(45, 75);
ctx.lineTo(75, 45);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.moveTo(35, 160);
ctx.lineTo(45, 125);
ctx.lineTo(75, 155);
ctx.fillStyle = "yellow";
ctx.fill();

ctx.beginPath();
ctx.moveTo(160, 160);
ctx.lineTo(155, 125);
ctx.lineTo(125, 155);
ctx.fillStyle = "yellow";
ctx.fill();

