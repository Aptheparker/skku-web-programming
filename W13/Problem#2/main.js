$(document).ready(function () {
  $('#btn1').click(function () {});
  $('#btn2').click(function () {});
  $('#btn3').click(function () {
    let canvas = document.createElement('canvas');
    let ctx = canvas.getContext('2d');
    $('.someBox').appendChild(ctx.strokeRect(0, 0, 100, 100));
  });
});
