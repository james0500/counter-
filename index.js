`use strict`;

// Selecting Elements
const logoEl = document.querySelector(`.logo`);
const countdownEl = document.querySelector(`.countdown`);
const instructionEl = document.querySelector(`.instruction`);
let chooseMinutesEl = document.querySelector(`.choose-minutes`);
const chooseEl = document.querySelector(`.choose`);
const background = document.querySelector(`.background`);

// ALl working functions
let  instructions = function (message) {
    instructionEl.textContent = message
}

let changeLogo = function (logo) {
    logoEl.src = logo
}

let changeColor = function (color){
    background.style.backgroundColor = color;
}

let count = function (message) {
    countdownEl.textContent = message;
}



chooseMinutesEl.value = 10;

// When space is pressed, it should start countdown
document.addEventListener(`keydown`, function (press) {

    if (press.key === " ") {
        console.log(press.key)
        // Pick countdown minutes
        let minutes = chooseMinutesEl.value
        console.log(minutes);

        let time = minutes * 60;

        // Time counter
        let countDown = setInterval( () => {
            let minutes = Math.floor (time / 60);
            let seconds = time % 60;

            // If seconds and minutes is less less 10, feature must add 0;
            seconds = seconds < 10 ? `0`+ seconds : seconds;
            minutes = minutes < 10 ? `0`+ minutes : minutes;

            count(`${minutes} : ${seconds}`)
            instructions(``);
            chooseEl.classList.add(`hidden`)

             // If Countdown is 00: 00, it should trigger time Up;
        if(minutes <= 0 && seconds == 0){
            clearInterval(countDown);
            changeColor(`red`);
            count(`Time Up`);
            instructions("Press delete to reset");
        }

        document.addEventListener(`keydown`, function(press) {
            if (press.key === `Backspace`) {
                 clearInterval(countDown);
                 changeColor(`blue`);
                 chooseEl.classList.remove(`hidden`)
                 chooseMinutesEl.value = 10;
                 chooseMinutesEl.value = 10;
    
                 count(`10 : ${`00`}`)
                 instructions(`SPACE to start or pause the timer. DEL to reset`);
            }
        })
        


            time--
        },1000)

    }



})

