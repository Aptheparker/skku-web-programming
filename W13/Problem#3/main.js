'use strict';

$('#nameInput').blur(function () {
  $('#nameInput').css({
    'background-color': 'white',
  });
});
$('#nameInput').focus(function () {
  $('#nameInput').css({
    'background-color': 'grey',
  });
});
$(function () {
  $('#dateInput').datepicker();
});
$(function () {
  $('#selectable').selectable();
});
$(function () {
  $(document).tooltip();
});
$(function () {
  $('#sortable1, #sortable2')
    .sortable({
      connectWith: '.connectedSortable',
    })
    .disableSelection();
});

$(function () {
  $(document).tooltip({
    items: '[title], #red, #blue',
    content: function () {
      let element = $(this);
      if (element.is('[title]')) {
        return element.attr('title');
      }
      if (element.is('#red')) {
        return "<div style='background: red'></div>";
      }
      if (element.is('#blue')) {
        return "<div style='background: blue'></div>";
      }
    },
  });
});

$(function () {
  $('#submitBtn').click(function () {
    let result = $('#inputAns');
    let name = $('#nameInput').val();
    let date = $('#dateInput').val();
    result.append('Name: ' + name + '<br>Date:' + date + '<br>');
  });
  $('#selectable').selectable({
    stop: function () {
      $('.ui-selected').each(function () {
        let result = $('#animalAns').empty();
        let text = $('.ui-selected').text();
        result.append(text);
      });
    },
  });
});

// function add() {
//   if ($('#targets').children().length < 10) {
//     let element = $("<div class='unit'></div>");

//     $('#targets').append(element);
//   } else {
//     $('#reach').html('Reached a limit');
//     $('#btn3').blur();
//   }
// }

// function kill() {
//   $('#targets').children().last().remove();

//   $('#reach').html('');
//   $('#btn3').focus();
// }

// function cleanup() {
//   $('#targets').children().remove();
//   $('#reach').html('');
//   $('#btn3').focus();
// }

// function shape() {
//   $('#targets')
//     .children()
//     .each(function () {
//       if ($(this).css('border-radius') === '15px') {
//         $(this).css({
//           'border-radius': '0px',
//         });
//       } else {
//         $(this).css({
//           'border-radius': '15px',
//         });
//       }
//     });
// }

// function color() {
//   $('#targets')
//     .children()
//     .each(function () {
//       if ($(this).css('background-color') == 'rgb(255, 0, 0)') {
//         $(this).css('background-color', 'white');
//       } else {
//         $(this).css('background-color', 'red');
//       }
//     });
// }

// $(document).ready(function () {
//   $('#btn1').click(color);
//   $('#btn2').click(shape);
//   $('#btn3').click(add);
//   $('#btn4').click(kill);
//   $('#btn5').click(cleanup);
// });
