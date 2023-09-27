'use strict'

// variable declarations
const navBar = document.querySelector('nav');
const header = document.querySelector('header');

// Event Listeners
// Linking Navs to content
navBar.addEventListener('click', function(e) {
    if(!e.target.classList.contains('nav-list')) return;

    const id = e.target.getAttribute('data-id');

    const target = document.querySelector(id);

    target?.scrollIntoView( {behavior: 'smooth'});
})

// sticky navBar
// not working, check functionality later
const callBackFn = function(entries) {
    const [entry] = entries;
    if(entry.isIntersecting) return;

    // console.log(entry);
    // navBar.classList.add('sticky');
    // console.log('stick');
}

const optionObserver = {
    root: null,
    threshold: 0.1,
    // rootMargin: 
}
const navObserver = new IntersectionObserver(callBackFn, optionObserver);
navObserver.observe(header);
