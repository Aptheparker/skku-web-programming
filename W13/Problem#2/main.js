const canvas = $('#canvas').get(0);
const ctx = canvas.getContext('2d');

$(document).ready(function () {
  $('#btn1').click(function () {});
  $('#btn2').click(function () {});
  $('#btn3').click(function () {
    ctx.strokeRect(0, 0, 10, 100);
  });
});
