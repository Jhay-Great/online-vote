'use strict'
const dates = document.querySelectorAll('.date');
const pollDurationLabel = document.querySelector('.date_commenced');
const tabs = document.querySelector('.tab_container');
const aspirantContainer = document.querySelector('.aspirants');
const legends = document.querySelector('.legend');


// Helper variables
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

// data
const data = {
    pollDuration: 7,
    voters: 100,
    aspirants: [
        {
            name: 'Kofi Yeboah',
            motto: 'Change like never before',
            tag: 'red',
            image: '../assets/red cube.jpg',
        },
        {
            name: 'Mavis Agama',
            motto: 'Actualising freedom and justice',
            tag: 'blue',
            image: '../assets/red cube.jpg',
        },
        {
            name: 'Moses Amegah',
            motto: 'Matching forward',
            tag: 'purple',
            image: '../assets/red cube.jpg',
        },
    ],
    groupData: false,
}
// Reading data
const aspirants = data.aspirants;

// displaying date in long and short date
dates.forEach(date => {
    const {optionsShort: shortDate, optionsLong: longDate} = dateOptions;
    const option = date === document.querySelector('span.date') ? shortDate : longDate;
    
    const pollDate = new Intl.DateTimeFormat('en-UK', option).format(currentDate);
    date.textContent = pollDate;
    
});


// checking and toggling tab display
(function() {
    const {groupData} = data;
    !groupData && tabs?.remove();
}) ();


// displaying aspirant
aspirants.forEach(aspirant => {
    const {name: delegateName, motto: delegateMotto, tag, image: delegateImg} = aspirant;
    const markup = `
    <div class="individual_aspirants">
    <img src="${delegateImg}" alt="${delegateName}">
    <div class="vote-options">
      <p class="aspirant-name">${delegateName}</p>
      <p class="description">${delegateMotto}</p>
      <button class="yes inline-flex">
      Yes
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);transform: ;msFilter:;"><path d="m10 15.586-3.293-3.293-1.414 1.414L10 18.414l9.707-9.707-1.414-1.414z"></path></svg>
    </button>
    </div>
    <!-- down arrow -->
    <svg width="41" height="40" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M6.21967 8.46967C6.51256 8.17678 6.98744 8.17678 7.28033 8.46967L10.75 11.9393L14.2197 8.46967C14.5126 8.17678 14.9874 8.17678 15.2803 8.46967C15.5732 8.76256 15.5732 9.23744 15.2803 9.53033L11.2803 13.5303C10.9874 13.8232 10.5126 13.8232 10.2197 13.5303L6.21967 9.53033C5.92678 9.23744 5.92678 8.76256 6.21967 8.46967Z" fill="#4A4A4A"/>
    </svg>
    <!-- up arrow -->
    <!-- <svg class="hidden" width="41" height="40" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M15.0303 12.2803C14.7374 12.5732 14.2626 12.5732 13.9697 12.2803L10.5 8.81066L7.03033 12.2803C6.73744 12.5732 6.26256 12.5732 5.96967 12.2803C5.67678 11.9874 5.67678 11.5126 5.96967 11.2197L9.96967 7.21967C10.2626 6.92678 10.7374 6.92678 11.0303 7.21967L15.0303 11.2197C15.3232 11.5126 15.3232 11.9874 15.0303 12.2803Z" fill="#4A4A4A"/>
    </svg> -->
  </div>
    `;
    aspirantContainer.insertAdjacentHTML('afterbegin', markup);

})

// displaying aspirants legend
// legends.innerHTML = '';
aspirants.forEach(aspirant => {
    const markup =`
    <div class="aspirant_legend">
        <span class="round_color"></span>
        <p class="normal-bold">${aspirant.name}</p>
        <p class="digit small-text">0</p>
    </div>
    `;
    legends.insertAdjacentHTML('afterbegin', markup);
    
    const tag = legends.querySelector('.round_color');
    tag.style.backgroundColor = `${aspirant.tag}`
    console.log(tag); 
});


// Event listeners
aspirantContainer.addEventListener('click', function(e) {
    const buttons = aspirantContainer.querySelectorAll('.yes');
    if(e.target.closest('.yes')) {
        buttons.forEach(button => {
            
            if(e.target.closest('.yes') === button.closest('.yes')) {
                button.classList.add('vetted');
                const chosenDelegate = button.parentElement.firstElementChild.textContent;
                const markup = `<span class="small-text">You voted for ${chosenDelegate} </span>`;

                // preventing repeated insertions to the page
                if(e.target.closest('.vote-options').querySelector('span')) return;
                button.insertAdjacentHTML('afterend', markup);

            };
            if(e.target.closest('.yes') !== button.closest('.yes')) button.remove();
        });
    }
})




// console.log({aspirantLegends});

/**
 * date should be display the current date and time 
 * specify time and duration of each poll
 * 
 * when aspirant is voted for the other button is highlighted
 * all other buttons are disabled
 * an indication in text showing user voted for a specific aspirant
 */