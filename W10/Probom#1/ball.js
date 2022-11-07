'use strict'; //strict mode

window.onload = function () {
  setInterval(frame, 20); //each frame of animation
};

let ball = document.getElementById('ball'); //ball from html
let height = 0; //height of the ball
let velocity = 0; //velocity of the ball

function frame() {
  ball.style.top = height + 'px'; //height
  height += velocity;

  if (height >= 360) {
    height = 360; //cannot be lower than the ground
    velocity = (-3 * velocity) / 4; //ball goes up
  }

  velocity += 1;
}
