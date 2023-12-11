'use strict'

const submitBtn = document.querySelector('input[type="submit"]');
const form = document.querySelector("form");
const popUp = document.querySelector(".pop-up_container");
const overlay = document.querySelector(".overlay");
const okayBtn = document.querySelector(".okay-btn");
const nameField = document.querySelector('.name');
const emailField = document.querySelector('.email');
const visibility = document.querySelectorAll('.visible');




form.addEventListener('submit', function(e) {
    e.preventDefault();

    popUp.classList.remove("hidden");
    overlay.classList.remove("hidden");
})

// Okay btn event to confirm submission
okayBtn.addEventListener("click", function () {
    popUp.classList.add("hidden");
    overlay.classList.add("hidden");

    localStorage.setItem('email', document.querySelector('.email').value);
    localStorage.setItem('password', document.querySelector('#password').value)

    document.querySelectorAll('input:not(input[type="submit"])').forEach(input => input.value = '');

    const animation = document.querySelector('.animation_container');
    console.log(animation);
    animation.classList.remove('hidden');

    setTimeout(() => {
        animation.classList.add('hidden');
        location.href = 'account.html';
        // location.replace('account.html');
        
    }, 3000);
    
});

// making password visible
document.addEventListener('click', function(e) {
    if(!e.target.closest('.visible')) return;
    e.preventDefault();

  console.log('visible');
  const inputContainer = e.target.closest('.visible').parentElement.querySelector('input');

  inputContainer.getAttribute('type') !== 'text' ? inputContainer.setAttribute('type', 'text') : inputContainer.setAttribute('type', 'password');

  
})


setTimeout(() => {
    console.log('hi there');
}, 3000);

console.log('logged');

function play() {
    console.log(2 + 3);
}

play();




