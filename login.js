'use strict'

const form = document.querySelector('form');
const password = document.querySelector('.password');


// functionality
const handleVisibility = function(container, key='type', value='password') {

    const visible = container.parentElement.querySelector('.visible');
    const invisible = container.parentElement.querySelector('.invisible');

    if(value ==='password') {
    visible.classList.remove('hidden');
    invisible.classList.add('hidden');
    }
    if(value !== 'password') {
    visible.classList.add('hidden');
    invisible.classList.remove('hidden');
    }

    container.setAttribute(key, value);
    
}


// Event listeners
form.addEventListener('submit', function(e) {
    e.preventDefault();

    // console.log(localStorage.getItem('email'));

    const isEmail = (document.querySelector('.email').value);
    const isPassword = (document.querySelector('#password').value);

    const userEmail = localStorage.getItem('email');
    const userPassword = localStorage.getItem('password');

    const incorrectPasswordMarkup = `<p class="small-text ab fc-r">Incorrect data entry</p>`;

    const invalidUserMarkup = `<p class="small-text ab fc-r">User does not exist. Sign up</p>`;

    if ((isEmail === userEmail) && (isPassword === userPassword)) {
        location.replace('account.html');
    }
    
    if ((isEmail === userEmail) && (isPassword !== userPassword)) {
        password.insertAdjacentHTML('beforeend', incorrectPasswordMarkup);
    }

    if ((isEmail !== userEmail) && (isPassword !== userPassword)) {
        password.insertAdjacentHTML('beforeend', invalidUserMarkup);
    }


    
    // location.replace('account.html');
})


// making password visible
document.addEventListener('click', function(e) {
if(!e.target.closest('.visibility-btn')) return;
e.preventDefault();

const inputContainer = e.target.closest('.visibility-btn').parentElement.querySelector('input');

// inputContainer.getAttribute('type') !== 'text' ? inputContainer.setAttribute('type', 'text') : inputContainer.setAttribute('type', 'password');

inputContainer.getAttribute('type') !== 'text' ? handleVisibility(inputContainer, 'type', 'text') : handleVisibility(inputContainer,'type', 'password');

})
  
