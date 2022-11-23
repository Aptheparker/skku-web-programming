$('#checkButton').click(function () {
  let id = $('#new_id').val();

  id = id.toLowerCase();
  id = id.replace(/[^a-z0-9-_.]+/g, '');
  id = id.replace(/[.]+/g, '.');
  if (id.charAt(0) == '.') {
    id = id.replace(id.charAt(0), '');
  }
  if (id.charAt(id.length - 1) == '.') {
    id = id.slice(0, -1);
  }
  if (id == '') {
    id = 'a';
  }
  if (id.length > 15) {
    id = id.substring(0, 15);
    if (id.charAt(id.length - 1) == '.') {
      id = id.slice(0, -1);
    }
  }
  if (id.length < 3) {
    if (id.length == 2) {
      id += id.charAt(id.length - 1);
    } else if (id.length == 1) {
      id += id.charAt(id.length - 1);
      id += id.charAt(id.length - 1);
    }
  }

  $('#answer').html('Your recommended ID is: ' + id);
});
