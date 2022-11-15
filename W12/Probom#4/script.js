let skillButton = document.getElementById('skillBtn');

const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

let img1 = new Image();
img1.src = 'images/lufface2.png';

function animateScript() {
  let position = 150;
  const interval = 100;
  let mover = 0;

  let a = setInterval(() => {
    document.getElementById(
      'image'
    ).style.backgroundPosition = `-${position}px 0px`;
    ctx1.drawImage(
      img1,
      0,
      mover + 10,
      150,
      100,
      0,
      0,
      canvas1.width,
      canvas2.height
    );

    if (position < 3000) {
      position = position + 150;
      mover = mover + 10;
    } else {
      clearInterval(a);
    }
  }, interval);
}

skillButton.addEventListener('click', animateScript);
