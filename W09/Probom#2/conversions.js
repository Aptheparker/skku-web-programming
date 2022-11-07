function convert() {
  let input = document.getElementById('input');
  let convert = document.getElementById('convert');
  let answer = document.getElementById('answer');

  input_int = parseInt(input.value);

  if (onlyNumbers(input.value)) {
    if (convert.value == 'kgtopounds') {
      input_int *= 2.20462262;
    } else {
      input_int *= 0.45359237;
    }
  } else {
    alert('Only Numbers!');
  }

  answer.innerHTML = input_int;
}

function onlyNumbers(input) {
  return Boolean(input.match(/^[0-9]*$/));
}
