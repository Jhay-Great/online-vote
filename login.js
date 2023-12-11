'use strict'

const form = document.querySelector('form');
console.log(form);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // console.log(localStorage.getItem('email'));

    const isEmail = (document.querySelector('.email').value);
    const isPassword = (document.querySelector('#password').value);

    const userEmail = localStorage.getItem('email');
    const userPassword = localStorage.getItem('password');

    (isEmail === userEmail) && (isPassword === userPassword) ? location.replace('account.html') : console.log('incorrect data');


    
    // location.replace('account.html');
})

