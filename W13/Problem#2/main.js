'use strict';

function add() {
  if ($('#targets').children().length <= 10) {
    let element = $("<div class='unit'></div>");

    $('#targets').append(element);
  } else {
    $('#reach').html('Reached a limit');
    $('#btn3').blur();
  }
}

function kill() {
  $('#targets').children().last().remove();

  $('#reach').html('');
  $('#btn3').focus();
}

function cleanup() {
  $('#targets').children().remove();
  $('#reach').html('');
  $('#btn3').focus();
}

function shape() {
  $('#targets')
    .children()
    .each(function () {
      if ($(this).css('border-radius') === '15px') {
        $(this).css({
          'border-radius': '0px',
        });
      } else {
        $(this).css({
          'border-radius': '15px',
        });
      }
    });
}

function color() {
  $('#targets')
    .children()
    .each(function () {
      if ($(this).css('background-color') === 'red') {
        $(this).css({
          'background-color': 'white',
        });
      } else {
        $(this).css({
          'background-color': 'red',
        });
      }
    });
}

$(document).ready(function () {
  $('#btn1').click(color);
  $('#btn2').click(shape);
  $('#btn3').click(add);
  $('#btn4').click(kill);
  $('#btn5').click(cleanup);
});
