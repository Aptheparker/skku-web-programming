let image = document.getElementById('image');
let direction = document.getElementById('direction');
let keyDirection;

window.onload = function () {
  keyDirection = 0;
  direction.innerHTML = 'right';
  animateScript();
  document.addEventListener('keydown', function (event) {
    switch (event.key) {
      case 'ArrowLeft':
        keyDirection = 141;
        direction.innerHTML = 'left';
        break;
      case 'ArrowRight':
        keyDirection = 0;
        direction.innerHTML = 'right';
        break;
    }
  });
};

function animateScript() {
  let position = 108;
  const interval = 100;
  tID = setInterval(() => {
    document.getElementById(
      'image'
    ).style.backgroundPosition = `-${position}px ${keyDirection}px`;
    if (position < 864) {
      position = position + 108;
    } else {
      position = 108;
    }
  }, interval);
}
