'use strict'
const dates = document.querySelectorAll('.date');
const pollDurationLabel = document.querySelector('.date_commenced');
const legends = document.querySelector('.legend');
const votingPurpose = document.querySelector('.heading_sub > p > span');
const allAspirants = document.querySelectorAll('.individual_aspirants');
const pageControls = document.querySelector('.page-control_navs');

const aspirantContainer = document.querySelector('.aspirants');
const tabs = document.querySelector('.tab_container');


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
    purpose: 'SRC Delegates',
    aspirants: [
        {
            name: 'Kofi Yeboah',
            motto: 'Change like never before',
            tag: 'red',
            image: '../assets/red cube.jpg',
            votes: 0,
        },
        {
            name: 'Mavis Agama',
            motto: 'Actualising freedom and justice',
            tag: 'blue',
            image: '../assets/red cube.jpg',
            votes: 0,
        },
        {
            name: 'Moses Amegah',
            motto: 'Matching forward',
            tag: 'purple',
            image: '../assets/red cube.jpg',
            votes: 0,
        },
        {
            name: 'Yaw Kwansah',
            motto: 'The people\'s joy',
            tag: 'green',
            image: '../assets/red cube.jpg',
            votes: 0,
        },
    ],
    groupData: false,
};

// Reading data
const aspirants = data.aspirants;

// active poll data
// const pollData = [
//     {
//         name: 'asp name',
//         tag: 'asp tag',
//         votes: 0,
//     }
// ];

// const h = {...aspirants};
// console.log(h);
// h[0].name = 'john Sowah'



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

// displaying voting purpose or type
votingPurpose.textContent = data.purpose;

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
aspirants.forEach(aspirant => {
    const markup =`
    <div class="aspirant_legend">
        <span class="round_color"></span>
        <p class="normal-bold name">${aspirant.name}</p>
        <p class="digit small-text">${aspirant.votes}</p>
    </div>
    `;
    legends.insertAdjacentHTML('afterbegin', markup);
    
    const colorTag = legends.querySelector('.round_color');
    colorTag.style.backgroundColor = `${aspirant.tag}`;
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

                // saving data
                localStorage.setItem('aspirant', button.parentElement.firstElementChild.textContent)

                // preventing repeated insertions to the page
                if(e.target.closest('.vote-options').querySelector('span')) return;
                button.insertAdjacentHTML('afterend', markup);

                const result = aspirants.filter(as => as.name === button.closest('.vote-options').querySelector('.aspirant-name').textContent);

                result[0].votes++;
                // checking and getting the aspirant legend
                const aspirantLegend = document.querySelectorAll('.aspirant_legend');

                aspirantLegend.forEach(aspirant => {
                    const aspirantName = aspirant.querySelector('.name');
                    const pollScore = aspirant.querySelector('.digit')

                    if(aspirantName.textContent === result[0].name) pollScore.textContent++;
                    
                    localStorage.setItem('vote', 1);

                })
                
                // console.log(aspirantLegend.textContent === result[0].name);
                // if(aspirantLegend.textContent === result[0].name)
                document.querySelector('.digit').textContent



                // console.log(result);
            };
            if(e.target.closest('.yes') !== button.closest('.yes')) button.remove();
        });
    }
})

// when page first loads
document.addEventListener('DOMContentLoaded', function() {
    const {name, aspirant: chosenAspirant, vote} = localStorage;
    const profileID = name.slice(0, 2);

    document.querySelector('.profile-image').textContent = profileID;

    if(!localStorage.getItem('aspirant') && !localStorage.getItem('vote')) return;

    document.querySelectorAll('.individual_aspirants').forEach(aspirant => {
        if(aspirant.querySelector('.aspirant-name').textContent === chosenAspirant) {
            aspirant.querySelector('button').classList.add('vetted');
        }
        if(aspirant.querySelector('.aspirant-name').textContent !== chosenAspirant) {
            aspirant.querySelector('button').remove();
        }
    })
    
    document.querySelectorAll('.aspirant_legend').forEach(aspirant => {
        if (aspirant.querySelector('.name').textContent === chosenAspirant) {
            aspirant.querySelector('.digit').textContent = vote;
        }
        
    })
    
})

// log out and dark mode
pageControls.addEventListener('click', function(e) {
    if(e.target.closest('.log-out')) {
        location.replace('/login.html');
        // localStorage.clear();
    };
})

// localStorage.removeItem('aspirant');



// console.log({aspirantLegends});

/**
 * date should be display the current date and time 
 * specify time and duration of each poll
 * 
 * when aspirant is voted for the other button is highlighted
 * all other buttons are disabled
 * an indication in text showing user voted for a specific aspirant
 */