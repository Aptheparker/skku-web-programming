$(document).ready(function () {
  let someBox = document.getElementsByClassName('someBox')[0];
  let counter = 0;
  $('#btn1').click(function () {
    for (let i = 0; i < someBox.length; i++) {
      someBox.fillStyle = 'red';
    }
  });

  $('#btn2').click(function () {});

  $('#btn3').click(function () {
    if (counter < 10) {
      let canvas = document.createElement('canvas');
      let ctx = canvas.getContext('2d');
      ctx.strokeRect(50, 0, 200, 100);
      someBox.appendChild(canvas);
      counter++;
    } else {
    }
  });

  $('#btn4').click(function () {});

  $('#btn5').click(function () {});
});
