'use strict';

let addBtn = document.getElementById('add');
let killBtn = document.getElementById('kill');
let cleanupBtn = document.getElementById('cleanup');
let stompBtn = document.getElementById('stomp');
let enrageBtn = document.getElementById('enrage');
let patrolBtn = document.getElementById('patrol');

function add() {
  //add element
  let checkMonster = document.getElementById('monsters');

  let people = document.getElementById('targets');
  let element = document.createElement('div');
  element.classList.add('unit');

  if (checkMonster.checked) {
    element.classList.add('monster');
  } else {
    element.classList.add('evil');
  }

  people.appendChild(element);
}

function kill() {
  let checkMonster = document.getElementById('monsters');
  let element;

  if (checkMonster.checked) {
    element = document.querySelectorAll('#targets .monster'); //delete monster
  } else {
    element = document.querySelectorAll('#targets .evil'); //delete evil
  }

  let killNumber = [Math.floor(Math.random() * element.length) + 1]; //how many kills

  for (let i = 0; i < killNumber; i++) {
    //kill
    let killIndex = [Math.floor(Math.random() * element.length)]; //which to kill

    if (checkMonster.checked) {
      element[killIndex].classList.remove('monster');
      element[killIndex].classList.add('splat');
    } else {
      element[killIndex].classList.remove('evil');
      element[killIndex].classList.add('splat');
    }
  }
}

function cleanup() {
  let element = document.querySelectorAll('#targets .splat');
  for (var i = 0; i < element.length; i++) {
    element[i].parentNode.removeChild(element[i]); //remove from list
  }
}

function stomp() {
  let element = document.querySelectorAll('#targets .unit');

  let killNumber = [Math.floor(Math.random() * element.length) + 1]; //how many kills

  for (let i = 0; i < killNumber; i++) {
    //kill
    let killIndex = [Math.floor(Math.random() * element.length)]; //which to kill

    if (element[killIndex].querySelectorAll('monster')) {
      element[killIndex].classList.remove('monster');
      element[killIndex].classList.add('splat');
    } else {
      element[killIndex].classList.remove('evil');
      element[killIndex].classList.add('splat');
    }
  }
}

function enrage() {
  let supersaipien = document.getElementById('supersaipien');

  if (supersaipien.src.match('../images/supersaipien1.png')) {
    supersaipien.src = '../images/supersaipien2.png';
  } else {
    supersaipien.src = '../images/supersaipien1.png';
  }
}

let leftPosition = 0;
let leftMove = 5;

function timer() {
  leftMove = 5;
  setInterval(patrol, 20); //each frame of animation
}

function patrol() {
  let supersaipien = document.getElementById('supersaipien');

  supersaipien.style.left = leftPosition + 'px';

  leftPosition += leftMove;

  if (leftPosition > 600) {
    leftMove *= -1;
  }

  if (leftPosition == 0) {
    leftMove = 0;
  }
}

addBtn.addEventListener('click', add);
killBtn.addEventListener('click', kill);
cleanupBtn.addEventListener('click', cleanup);
stompBtn.addEventListener('click', stomp);
enrageBtn.addEventListener('click', enrage);
patrolBtn.addEventListener('click', timer);
