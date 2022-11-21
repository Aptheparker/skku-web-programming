const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

$(document).ready(function () {
  $('#btn1').click(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(150, 20);
    ctx.lineTo(60, 120);
    ctx.lineTo(240, 120);
    ctx.fill();
  });
  $('#btn2').click(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.moveTo(150, 120);
    ctx.lineTo(60, 20);
    ctx.lineTo(240, 20);
    ctx.fill();
  });
  $('#btn3').click(function () {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  });
});
