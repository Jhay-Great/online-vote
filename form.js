"use strict";
const submitBtn = document.querySelector('input[type="submit"]');
const form = document.querySelector("form");
const popUp = document.querySelector(".pop-up_container");
const overlay = document.querySelector(".overlay");
const okayBtn = document.querySelector(".okay-btn");
const nameField = document.querySelector('.name');
const emailField = document.querySelector('.email');
// const description = document.getElementById('.description');


// helper variables
let password;
const symbol = ['!', '@', '#', '$', '%', '^', '&', '*', '_', '-', '=', '+'];

// Helper Functions

// input validation
const validate = function(e) {
    // remove classList if any
    e.target.classList.remove('negative-validation');

    if (e.target.value === '') {
        e.target.classList.add('negative-validation')
        // e.target.closest('.form-fields').querySelector('label').style.backgroundColor = 'red';
        e.target.closest('.form-fields').querySelector('label').classList.add('label-negative-validation');
    };
    if (e.target.value !== '') {
        e.target.classList.add('positive-validation')
        e.target.closest('.form-fields').querySelector('label').style.backgroundColor = 'green';
    }
    // console.log(e.target.value)
    
}

// Resetting form
const formReset = function(e) {
  form.reset();
  e.forEach(el => {
    el.classList.remove('positive-validation');
  })
}

// validating password only
const validatePassword = function(e) {
  if(!e.target.closest('.form-fields').querySelector('#password')) return;

  // if input value is 8 digit or more and contains a symbol and a capital letter
  if(e.target.value.length >= 8) {
    const val = symbol.some(sym => e.target.value.includes(sym));
    const res = val || e.target.value.split(',').some(letter => letter.includes(letter.toUpperCase()));
    res ? console.log('w') : console.log('f');
    // console.log(e.target.value);
  }
}



// Event listeners
window.addEventListener('load', function() {
  nameField.focus();
})

form.addEventListener("submit", function (e) {
  e.preventDefault();

  popUp.classList.remove("hidden");
  overlay.classList.remove("hidden");

  formReset([nameField, emailField]);

});

// Okay btn event to confirm submission
okayBtn.addEventListener("click", function () {
  popUp.classList.add("hidden");
  overlay.classList.add("hidden");
});
// Keyboard event listener for 'Okay btn'
// document.addEventListener("keydown", function (e) {
//   e.preventDefault();
//   if (!e.key === "Enter") return;
//   console.log(e.key);

//   popUp.classList.add("hidden");
//   overlay.classList.add("hidden");
// });

const getElement = function(e, id) {
  // getting / selecting an element
  return e.target.closest('.form-fields').querySelector(id);
}

// form validation
form.addEventListener('blur', function(e) {
  if(!e.target.closest('.form-fields')) return;


  // EMAIL VALIDATION
  const email = e.target.closest('.form-fields').querySelector('.email');

  if(email && email?.value.includes('@')) {
    e.target.closest('.form-fields').querySelector('label').style.backgroundColor = 'green';
  };
  if (email && !email?.value.includes('@')) {
    // e.target.closest('.form-fields').querySelector('label').style.backgroundColor = 'red';
    e.target.closest('.form-fields').querySelector('label').classList.add('label-negative-validation');
  };


  // PASSWORD VALIDATION
  if(e.target.closest('.form-fields').querySelector('#password') && e.target.closest('.form-fields').querySelector('#password').value.length > 8) {
    password = e.target.closest('.form-fields').querySelector('#password');
    // console.log(password?.value);
    validate(e);
  } 
  
  // CONFIRM PASSWORD
  if(e.target.closest('.form-fields').querySelector('#confirm-password')) {
    const confirmPassword = e.target.closest('.form-fields').querySelector('#confirm-password');
    // console.log(confirmPassword.value);

    // console.log(password?.value, confirmPassword?.value);

    if (password?.value === confirmPassword?.value) {
      // e.target.closest('.form-fields').querySelector('label').style.backgroundColor = 'green';
      console.log('correct password')
    }
    if (password?.value !== confirmPassword?.value) {
      e.target.closest('.form-fields').querySelector('label').classList.add('label-negative-validation');
      // e.target.closest('.form-fields').querySelector('label').style.backgroundColor = 'red';
      console.log('incorrect password');
    }
  }
  
}, true);


nameField.addEventListener('blur', validate);

// need to work on the @ validation here
emailField.addEventListener('blur', function(e) {
  e.target.classList.remove('negative-validation');

  
  e.target.value.includes('@') ? e.target.classList.add('positive-validation') : e.target.classList.add('negative-validation');
  
});


// password validation event
form.addEventListener('change', validatePassword);



/**To do
 * Redirection to the user dashboard
 * store name, email and password in the browser's session storage
 * display name on dashboard and while dashboard is loading to imitate loading from the serve side
 * read email and password during login.
 */




// const password = document.querySelector('#password');
// password.addEventListener('blur', function(e) {
//   console.log(password.value);
// })

// console.log(window.getComputedStyle(document.querySelector('h1'), null));
// console.log(document.styleSheets[1])

