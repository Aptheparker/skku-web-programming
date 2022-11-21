let skillButton = document.getElementById('skillBtn');

const canvas1 = document.getElementById('canvas1');
const ctx1 = canvas1.getContext('2d');
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d');

function animateScript() {
  let position = 150;
  const interval = 100;
  let mover = 0;

  let img1 = new Image();
  img1.src = 'images/lufface2.png';
  let img2 = new Image();
  img2.src = 'images/lufface.png';

  let a = setInterval(() => {
    document.getElementById(
      'image'
    ).style.backgroundPosition = `-${position}px 0px`;

    ctx1.drawImage(img1, 0, mover, 435, mover, 0, mover, canvas1.width, mover);
    ctx2.drawImage(img2, 0, mover, 435, mover, 0, mover, canvas2.width, mover);

    if (position < 3000) {
      position = position + 150;
      mover = mover + 6.55;
    } else {
      ctx1.clearRect(0, 0, canvas1.width, canvas1.height);
      ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
      clearInterval(a);
    }
  }, interval);
}

skillButton.addEventListener('click', animateScript);
