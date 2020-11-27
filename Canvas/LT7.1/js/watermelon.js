var canvas = document.getElementById("watermelon")
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
ctx.arc(100, 100, 80, 0, 1 * Math.PI);
ctx.fillStyle = "#51cc4e";
ctx.fill();

ctx.beginPath();
ctx.arc(100, 100, 70, 0, 1 * Math.PI);
ctx.fillStyle = "#fc3e43";
ctx.fill();

ctx.beginPath();
ctx.arc(70, 115, 6, 0, 2 * Math.PI);
ctx.fillStyle = 'grey';
ctx.fill();

ctx.beginPath();
ctx.arc(100, 125, 6, 0, 2 * Math.PI);
ctx.fillStyle = 'grey';
ctx.fill();

ctx.beginPath();
ctx.arc(75, 140, 6, 0, 2 * Math.PI);
ctx.fillStyle = 'grey';
ctx.fill();

ctx.beginPath();
ctx.arc(120, 150, 6, 0, 2 * Math.PI);
ctx.fillStyle = 'grey';
ctx.fill();

ctx.beginPath();
ctx.arc(140, 140, 6, 0, 2 * Math.PI);
ctx.fillStyle = 'grey';
ctx.fill();

ctx.beginPath();
ctx.arc(130, 120, 6, 0, 2 * Math.PI);
ctx.fillStyle = 'grey';
ctx.fill();

ctx.beginPath();
ctx.arc(50, 125, 6, 0, 2 * Math.PI);
ctx.fillStyle = 'grey';
ctx.fill();

ctx.beginPath();
ctx.arc(95, 155, 6, 0, 2 * Math.PI);
ctx.fillStyle = 'grey';
ctx.fill();

ctx.beginPath();
ctx.arc(155, 115, 6, 0, 2 * Math.PI);
ctx.fillStyle = 'grey';
ctx.fill();


