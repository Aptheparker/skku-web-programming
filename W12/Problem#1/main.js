const showUpperImage = () => {
  let upperFile = document.getElementById('upperFile').files[0];
  let upperImage = document.getElementById('upperImage');

  let reader = new FileReader();
  reader.onload = function (e) {
    upperImage.src = e.target.result;
  };

  reader.readAsDataURL(upperFile);
};

const showLowerImage = () => {
  let lowerFile = document.getElementById('lowerFile').files[0];
  let lowerImage = document.getElementById('lowerImage');

  let reader = new FileReader();
  reader.onload = function (e) {
    lowerImage.src = e.target.result;
  };

  reader.readAsDataURL(lowerFile);
};

const showUpperContext = () => {
  let upperText = document.getElementById('upperText').value;
  document.getElementById('upperContext').innerHTML = upperText;
};

const showLowerContext = () => {
  let lowerText = document.getElementById('lowerText').value;
  document.getElementById('lowerContext').innerHTML = lowerText;
};
