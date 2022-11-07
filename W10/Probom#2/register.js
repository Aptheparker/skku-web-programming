'use strict';

let registerBtn = document.getElementById('validate');

// let special = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

function reg() {
  let name = document.getElementById('name');
  let email = document.getElementById('email');
  let code = document.getElementById('code');
  let address = document.getElementById('address');
  let telnum = document.getElementById('telnum');
  let department = document.getElementById('department');
  let birth = document.getElementById('birth');
  let pass = document.getElementById('pass');
  let passcheck = document.getElementById('passcheck');
  let tarea = document.getElementById('tarea');

  if (name.value == '') {
    name.style.backgroundColor = 'red';
  } else {
    name.style.backgroundColor = '';
  }

  if (
    //c
    email.value == '' ||
    !email.value.match(/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]+$/)
  ) {
    email.style.backgroundColor = 'red';
  } else {
    email.style.backgroundColor = '';
  }

  if (
    code.value == '' ||
    code.value.length < 5 ||
    code.value < 0 ||
    !code.value.match(/^[0-9]+$/)
  ) {
    //a
    code.style.backgroundColor = 'red';
  } else {
    code.style.backgroundColor = '';
  }

  if (address.value == '') {
    address.style.backgroundColor = 'red';
  } else {
    address.style.backgroundColor = '';
  }

  if (
    telnum.value == '' ||
    telnum.value.length < 8 ||
    telnum.value < 0 ||
    !telnum.value.match(/^[0-9]+$/)
  ) {
    //b
    telnum.style.backgroundColor = 'red';
  } else {
    telnum.style.backgroundColor = '';
  }

  if (department.value == '') {
    department.style.backgroundColor = 'red';
  } else {
    department.style.backgroundColor = '';
  }

  if (birth.value == '' || !birth.value.match(/^\d{4}\-\d{1,2}\-\d{1,2}$/)) {
    //d
    birth.style.backgroundColor = 'red';
  } else {
    birth.style.backgroundColor = '';
  }

  if (
    //e
    pass.value == '' ||
    pass.value.length < 6 ||
    (pass.value.match(/[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/g) || [])
      .length !== 1 ||
    pass.value != passcheck.value
  ) {
    pass.style.backgroundColor = 'red';
  } else {
    pass.style.backgroundColor = '';
  }

  if (passcheck.value == '' || passcheck.value.length < 6) {
    passcheck.style.backgroundColor = 'red';
  } else {
    passcheck.style.backgroundColor = '';
  }

  if (tarea.value == '') {
    tarea.style.backgroundColor = 'red';
  } else {
    tarea.style.backgroundColor = '';
  }

  if (
    //f
    name.style.backgroundColor == '' &&
    email.style.backgroundColor == '' &&
    code.style.backgroundColor == '' &&
    address.style.backgroundColor == '' &&
    telnum.style.backgroundColor == '' &&
    department.style.backgroundColor == '' &&
    birth.style.backgroundColor == '' &&
    pass.style.backgroundColor == '' &&
    passcheck.style.backgroundColor == '' &&
    tarea.style.backgroundColor == ''
  ) {
    alert('Congratulations! You registered the Web Programming Course');
  }
}
