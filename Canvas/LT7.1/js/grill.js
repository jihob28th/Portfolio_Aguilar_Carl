var canvas = document.getElementById("grill")
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
ctx.moveTo(80, 125);
ctx.lineTo(70, 170);
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(120, 125);
ctx.lineTo(130, 170);
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.rect(97, 20, 5, 30);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.rect(85, 15, 30, 5);
ctx.fillStyle = "black";
ctx.fill();

ctx.beginPath();
ctx.moveTo(160, 90);
ctx.lineTo(40, 90);
ctx.lineWidth = 8;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 80, 45, 0, 2 * Math.PI);
ctx.fillStyle = "#cf1337";
ctx.fill();

ctx.beginPath();
ctx.arc(100, 80, 50, 0, 1 * Math.PI);
ctx.fillStyle = "#b0002a";
ctx.fill();

ctx.beginPath();
ctx.moveTo(80, 135);
ctx.lineTo(125, 155);
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.stroke();

ctx.beginPath();
ctx.moveTo(125, 135);
ctx.lineTo(75, 155);
ctx.lineWidth = 5;
ctx.strokeStyle = "black";
ctx.stroke();




