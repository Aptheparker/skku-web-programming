//part 2

//part 3
window.addEventListener('load', start); //calling ecrypt()

function start() {
  let encryptBtn = document.getElementById('encrypt');

  encryptBtn.addEventListener('click', encrypt); //when clicked
}

//part 4
function encrypt() {
  //encrypt
  let input = document.getElementById('plain_text').value;
  let output = document.getElementById('output');
  let type = document.getElementById('type').value;

  if (onlyLetters(input)) {
    if (type == 'shift') {
      //shift
      output.innerHTML = shiftCipher(input);
    } else {
      //randomized
      output.innerHTML = randomizedCipher(input);
    }
  } else {
    alert('only letters');
  }
}

//part 5 random
function randomizedCipher(input) {
  let oldLetters = 'abcdefghijklmnopqrstuvwxyz';
  let old2new = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let newLetters = '';
  let output = '';

  //new
  for (let i = 0; i < oldLetters.length; i++) {
    let newIndex = Math.floor(Math.random() * old2new.length);
    newLetters += old2new.splice(newIndex, 1);
  }

  //output
  for (let i = 0; i < input.length; i++) {
    if (input[i] == input[i].toUpperCase()) {
      //capitalized
      let index = oldLetters.indexOf(input[i].toLowerCase());
      output += newLetters[index].toUpperCase();
    } else {
      //not capitalized
      let index = oldLetters.indexOf(input[i]);
      output += newLetters[index];
    }
  }

  return output;
}

//part 6 shift
function shiftCipher(input) {
  let oldLetters = 'abcdefghijklmnopqrstuvwxyz';
  let value = document.getElementById('val').value;
  let output = '';

  //output
  for (let i = 0; i < input.length; i++) {
    if (input[i] == input[i].toUpperCase()) {
      //capitalized
      let index = oldLetters.indexOf(input[i].toLowerCase());
      if (index - value < 0) {
        index += 26;
      }
      output += oldLetters[index - value].toUpperCase();
    } else {
      //not captalized
      let index = oldLetters.indexOf(input[i]);
      if (index - value < 0) {
        index += 26;
      }
      output += oldLetters[index - value];
    }
  }

  return output;
}

//check only letters
function onlyLetters(str) {
  return Boolean(str.match(/^[A-Za-z]*$/));
}
