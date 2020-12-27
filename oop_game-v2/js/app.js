/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

let game;
const overlayDiv = document.getElementById('overlay');
const startButton = document.getElementById(`btn__reset`);
const keysDiv = document.getElementById('qwerty');
const buttons = keysDiv.querySelectorAll('button');
const ul = document.getElementById('phrase').firstElementChild;
let sections = document.getElementsByClassName('section');
const scoreBoard = document.getElementById('scoreboard').firstElementChild.children;
let liItems = ul.children;


startButton.addEventListener('click', e =>  {
    if (ul.firstElementChild) {
        for (let i = 0; i < buttons.length; i++) {
                buttons[i].className = 'key';
        }
        for (let i = 0;  i < sections.length; i++) {
            sections[i].style.display = 'block';
        }
        while( ul.firstElementChild ) {
            ul.removeChild( ul.firstElementChild );
        }
        for (i = 0; i < scoreBoard.length; i++) {
            scoreBoard[i].outerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">`;
        }

        overlayDiv.style.display = 'none';
        overlayDiv.className = 'start';
    }
       
    game = new Game();
    game.startGame();
    console.log(game.activePhrase);
})

keysDiv.addEventListener('click', e => {
    if (e.target.className === 'key'){
        game.handleInteraction(e.target);
    }
})
