'use strict'
const dates = document.querySelectorAll('.date');


const currentDate = new Date();

const dateOptions = {
    optionsShort: {
        month: 'long',
        year: 'numeric',
    },
    optionsLong: {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    }
};

dates.forEach(date => {
    const {optionsShort: shortDate, optionsLong: longDate} = dateOptions;
    const option = date === document.querySelector('span.date') ? shortDate : longDate;
    
    const pollDate = new Intl.DateTimeFormat('en-UK', option).format(currentDate);
    date.textContent = pollDate;
    
})




/**
 * date should be display the current date and time 
 * specify time and duration of each poll
 */