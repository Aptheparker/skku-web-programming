let yesBtn = document.getElementById('yesBtn');
let noBtn = document.getElementById('noBtn');
let numNo = document.getElementById('numNo');
let memeImage = document.getElementById('memeImage');
let counter = 0;

const yesClicked = () => {
  counter = 0;
  numNo.innerHTML = '';
  memeImage.src = 'img/happy.png';
};

const moveBtn = () => {
  counter++;
  numNo.innerHTML = "You are trying to say 'No' for: " + counter + ' times';
  if (counter >= 5) {
    counter = 0;
    numNo.innerHTML = '';
    memeImage.src = 'img/sad.png';
    alert('You are really hurting me!!');
  }
  noBtn.style.marginTop = Math.random() * 300 + 'px';
  console.log();
  noBtn.style.marginLeft = Math.random() * 300 + 'px';
};

yesBtn.addEventListener('click', yesClicked);
noBtn.addEventListener('mouseover', moveBtn);
