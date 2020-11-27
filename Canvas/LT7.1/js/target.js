var canvas = document.getElementById("target")
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
ctx.fillStyle = "white";
ctx.fill();

ctx.beginPath();
ctx.arc(100, 100, 80, 0, 2 * Math.PI);
ctx.lineWidth = 10;
ctx.strokeStyle = '#ff7058';
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 100, 60, 0, 2 * Math.PI);
ctx.lineWidth = 10;
ctx.strokeStyle = '#ff7058';
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 100, 40, 0, 2 * Math.PI);
ctx.lineWidth = 10;
ctx.strokeStyle = '#ff7058';
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 100, 20, 0, 2 * Math.PI);
ctx.lineWidth = 10;
ctx.strokeStyle = '#ff7058';
ctx.stroke();

ctx.beginPath();
ctx.arc(100, 100, 8, 0, 2 * Math.PI);
ctx.fillStyle = '#ff7058';
ctx.fill();





