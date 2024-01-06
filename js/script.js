'use strict'

const animatedText = document.querySelector('.animated__info');
const getStarted = document.querySelector('.get-started')
const getStartedBtn = document.querySelector('.get-started_btn');

const observerFn = function(entries) {
    const [entry] = entries;
    // console.log(entry);

    if(entry.isIntersecting) {
        
        animatedText.style.opacity = 1;
        // getStarted.style.opacity = 1;

        const children = animatedText.querySelectorAll('.animated__info > *');
        children.forEach((child, i) => {
            // console.log(i, child)
            child.classList.add(`anime_${i}`);
        })
    }

    // textObserver.unobserve(animatedText);
    
}

const observerObj = {root: null, threshold: 0.1}

const textObserver = new IntersectionObserver(observerFn, observerObj);
textObserver.observe(animatedText)
// const children = animatedText.querySelectorAll('.animated__info > *');
// children.forEach(child => textObserver.observe(child))

getStartedBtn.addEventListener('click', function(e) {
    const sections = document.querySelectorAll('main > *:not(main > *:first-child)');
    sections.forEach((section, i) => {
        section.classList.remove('hidden');
        section.classList.remove('faint');
    });
    sections[0].scrollIntoView({behavior: 'smooth'})
    
})































































// // variable declarations
// const navBar = document.querySelector('nav');
// const header = document.querySelector('header');

// // Event Listeners
// // Linking Navs to content
// // navBar.addEventListener('click', function(e) {
// //     if(!e.target.classList.contains('nav-list')) return;

// //     const id = e.target.getAttribute('data-id');

// //     const target = document.querySelector(id);

// //     target?.scrollIntoView( {behavior: 'smooth'});
// // })

// // sticky navBar
// // not working, check functionality later
// const callBackFn = function(entries) {
//     const [entry] = entries;
//     if(entry.isIntersecting) return;

//     // console.log(entry);
//     // navBar.classList.add('sticky');
//     // console.log('stick');
// }

// const optionObserver = {
//     root: null,
//     threshold: 0.1,
//     // rootMargin: 
// }
// const navObserver = new IntersectionObserver(callBackFn, optionObserver);
// navObserver.observe(header);

// // let page;
// // window.addEventListener('hashchange', function(e) {
// //     e.preventDefault();
// //     console.log(e.target.location.hash);
// //     page = e.target.location.hash;
// // })

// // window.addEventListener('load', function() {
// //     page;
// // })



