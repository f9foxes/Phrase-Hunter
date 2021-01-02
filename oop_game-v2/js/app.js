// Set variables and get elements to be used in event listeners.

let game;
const overlayDiv = document.getElementById('overlay');
const startButton = document.getElementById(`btn__reset`);
const keysDiv = document.getElementById('qwerty');
const buttons = keysDiv.querySelectorAll('button');
const ul = document.getElementById('phrase').firstElementChild;
let sections = document.getElementsByClassName('section');
const scoreBoard = document.getElementById('scoreboard').firstElementChild.children;
let liItems = ul.children;
let title = document.getElementById('banner').firstElementChild.innerText;

/*
If it's the first game, game is set to new Game class.
startGame method is called on the new game class.
If player is playing again, board is reset to begin a new game first.
*/
startButton.addEventListener('click', e =>  {
    if (ul.firstElementChild) {
        for (let i = 0; i < buttons.length; i++) {
                buttons[i].classList.remove('chosen', 'wrong');
                buttons[i].disabled = false;
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

// Listen for letters to be clicked.
// If the letter clicked has not yet been clicked, (className = 'key') 
    //handleInteraction method is passed the clicked letter button.

keysDiv.addEventListener('click', e => {
        game.handleInteraction(e.target);
})

// Listen for keydown event on keyboard.
// Allow keyboard to be used for guessing letters only.
// Letter clicked is matched with corresponding letter displayed and passed as an argument into the handleInteraction method.
document.addEventListener('keydown',  e =>  {
    let letter = e.key.toLocaleLowerCase();
    if ((/[a-z]/).test(letter)) {
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].innerText === letter && !buttons[i].disabled) {
                game.handleInteraction(buttons[i]);
            }
        }
    }
})
