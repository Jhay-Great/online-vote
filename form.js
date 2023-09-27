"use strict";
const submitBtn = document.querySelector('input[type="submit"]');
const form = document.querySelector("form");
const popUp = document.querySelector(".pop-up_container");
const overlay = document.querySelector(".overlay");
const okayBtn = document.querySelector(".okay-btn");
const nameField = document.querySelector('.name');
const emailField = document.querySelector('.email');
const description = document.getElementById('description');

// Helper Functions
const validate = function(e) {
    // remove classList if any
    e.target.classList.remove('negative-validation');

    if (e.target.value === '') {
        e.target.classList.add('negative-validation')
    };
    if (e.target.value !== '') {
        e.target.classList.add('positive-validation')
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

// Event listeners
form.addEventListener("submit", function (e) {
  e.preventDefault();

  popUp.classList.remove("hidden");
  overlay.classList.remove("hidden");

  formReset([nameField, emailField, description]);

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

// form validation
nameField.addEventListener('blur', validate);
// need to work on the @ validation here
emailField.addEventListener('blur', validate);
description.addEventListener('blur', validate);

