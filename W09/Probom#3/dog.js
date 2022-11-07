function required() {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let zip = document.getElementById('zip');
  let address = document.getElementById('address');
  let phone = document.getElementById('phone');
  let password = document.getElementById('password');
  let textarea = document.getElementById('textarea');

  if (name.value == '') {
    name.style.backgroundColor = 'red';
  } else {
    name.style.backgroundColor = '';
  }

  if (email.value == '') {
    email.style.backgroundColor = 'red';
  } else {
    email.style.backgroundColor = '';
  }

  if (zip.value == '') {
    zip.style.backgroundColor = 'red';
  } else {
    zip.style.backgroundColor = '';
  }

  if (address.value == '') {
    address.style.backgroundColor = 'red';
  } else {
    address.style.backgroundColor = '';
  }

  if (phone.value == '') {
    phone.style.backgroundColor = 'red';
  } else {
    phone.style.backgroundColor = '';
  }

  if (password.value == '') {
    password.style.backgroundColor = 'red';
  } else {
    password.style.backgroundColor = '';
  }

  if (textarea.value == '') {
    textarea.style.backgroundColor = 'red';
  } else {
    textarea.style.backgroundColor = '';
  }
}
