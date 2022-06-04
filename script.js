let form = document.querySelector('.form');

let inputs = document.querySelectorAll('.input');
let btnSubmit = document.querySelector('.btn-submit');

let fname = document.getElementById('fname');
let lname = document.getElementById('lname');
let email = document.getElementById('email');
let password = document.getElementById('password');

btnSubmit.disabled = true;
btnSubmit.classList.add('disabled');

//After submit
// form.addEventListener('submit', (e) => {
//   let errorMessages = checkInputs();
//   if (errorMessages.length > 0) {
//     e.preventDefault();
//   }
// });

inputs.forEach((input) => {
  input.addEventListener('input', () => {
    let message = '';
    //Checks if an input is empty
    if (input.value.trim() === '') {
      disableSubmitBtn(true);
      //Changes message in relation to the input
      if (input.id === 'fname') {
        message = 'First Name cannot be empty';
      } else if (input.id === 'lname') {
        message = 'Last Name cannot be empty';
      } else if (input.id === 'email') {
        message = 'Email cannot be empty';
      } else if (input.id === 'password') {
        message = 'Password cannot be empty';
      }
      showError(input, 'error', message, 'icon-error');
    } else {
      removeError(input, 'error', 'icon-error');
    }
    //If input is email then checks if is valid
    if (input.id === 'email' && input.value.trim() !== '' && !validateEmail(input.value.trim())) {
      message = 'Looks like this is not an email';
      showError(input, 'error', message, 'icon-error');
      disableSubmitBtn(true);
    }
    //If everything is correct, enables submit button
    if (fname.value.trim() !== '' && lname.value.trim() !== '' && validateEmail(email.value.trim()) && password.value.trim() !== '') {
      disableSubmitBtn(false);
    }
  });
});

//Check after submit
// checkInputs = () => {
//   let errorMessages = [];
//   if (fname.value.trim() === '') {
//     showError(fname, 'error', 'First Name cannot be empty', 'icon-error');
//     errorMessages.push('First Name empty');
//   } else {
//     removeError(fname, 'error', 'icon-error');
//   }

//   if (lname.value.trim() === '') {
//     showError(lname, 'error', 'Last Name cannot be empty', 'icon-error');
//     errorMessages.push('Last Name empty');
//   } else {
//     removeError(lname, 'error', 'icon-error');
//   }

//   if (!validateEmail(email.value.trim())) {
//     showError(email, 'error', 'Looks like this is not an email', 'icon-error');
//     email.placeholder = 'email@example/com';
//     email.classList.add('placeholder-error');
//     errorMessages.push('Email empty or invalid');
//   } else {
//     removeError(email, 'error', 'icon-error');
//   }

//   if (password.value.trim() === '') {
//     showError(password, 'error', 'Password cannot be empty', 'icon-error');
//     errorMessages.push('Password empty');
//   } else {
//     removeError(password, 'error', 'icon-error');
//   }

//   return errorMessages;
// };

showError = (input, className, message, iconClassName) => {
  input.classList.add(className);
  input.placeholder = '';
  let span = input.nextElementSibling;
  span.innerText = message;
  let icon = input.previousElementSibling.previousElementSibling;
  icon.classList.add(iconClassName);
};

removeError = (input, className, iconClassName) => {
  input.classList.remove(className);
  let span = input.nextElementSibling;
  span.innerText = '';
  let icon = input.previousElementSibling.previousElementSibling;
  icon.classList.remove(iconClassName);
};

validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
};

disableSubmitBtn = (estado) => {
  btnSubmit.disabled = estado;
  if (estado === true) {
    btnSubmit.classList.add('disabled');
    return;
  }
  btnSubmit.classList.remove('disabled');
};
