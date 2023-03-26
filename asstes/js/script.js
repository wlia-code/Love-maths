//wait for the dom to finsh loading before running the game
//get the button elements and add event listener

document.addEventListener('DOMContentLoaded', function () {
    let buttons = document.getElementsByTagName('button');

    for (let button of buttons) {
        button.addEventListener('click', function () {
            if (this.getAttribute('data-type') === 'submit') {
                alert('You Clicked Submit!');
            } else {
                let gameType = this.getAttribute('data-type');
                alert(`You Clicked ${gameType}`);
            }
        })
    }
})


function runGame(DOM) {

}

function checkAnswer() {

}


function calculateCorrectAnswer() {

}

function incrementScore() {

}

function incrementWrongAnswer() {

}

function displayAdditionQuestion() {

}

function displaySubtractQuestion() {

}

function displayMultiplayQuestion() {

}