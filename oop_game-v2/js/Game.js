// Array of phrases to source random phrase from.
const phraseList = [
    'Between a Rock and a Hard Place',
    'Cry Over Spilt Milk',
    'Flea Market',
    'Shot In the Dark',
    'All Greek To Me',
    'Jaws of Death',
    'Right Off the Bat',
    'Playing Possum',
    'Right Out of the Gate',
    'On the Ropes',
    'Burst Your Bubble',
    'Barking Up The Wrong Tree',
    'Jig Is Up',
    'Fit as a Fiddle',
    'Give a Man a Fish',
    'Back To the Drawing Board',
    'Dropping Like Flies',
    'Quality Time',
    'High And Dry',
    'Cut The Mustard',
    'Short End of the Stick',
    'Back to Square One'
]


 class Game {
     constructor() {
         this.missed = 0;
         this.phrases = this.createPhrases();
         this.activePhrase = new Phrase (this.getRandomPhrase());
     }

    /**
    * Creates phrases for use in game
    * @return {array} An array of phrases that could be used in the game
    */

    createPhrases() {
        let randomPhraseList = [];
        let numList = [];

        while (numList.length < 5) {
            let randomListNumber = Math.floor(Math.random() * (phraseList.length));
    
            if (numList.every(number => number !== randomListNumber)) {
                numList.push(randomListNumber);
                let phrase = {phrase: phraseList[randomListNumber]}
                randomPhraseList.push(phrase);
            }  
        }
        console.log(randomPhraseList);
        return randomPhraseList;
    };

    /**
    * Selects random phrase from phrases property
    * @return {Object} Phrase object chosen to be used
    */

     getRandomPhrase() {
        let randomPhraseIndex = Math.floor(Math.random() * (this.phrases.length));
        return this.phrases[randomPhraseIndex];
     }

     /**
     * Begins game by selecting a random phrase and displaying it to user
     * Removes overlay when game starts.
     */

     startGame() {
        let overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'none';
        this.activePhrase.addPhraseToDisplay();
     }

     /**
    * Handles onscreen keyboard button clicks
    * @param (HTMLButtonElement) button - The clicked button element
    * Changes the class name on the button.
    * If there is a match, check to see if player has won.
    * If the player wins, call gameOver method.
    * If there is not a match, call removeLife method.
    */
    handleInteraction(button) {
        if (button.className === 'key') {
            button.disabled = true;
            let letter = button.innerText;
            let matchLetter = this.activePhrase.checkLetter(letter);
            if (matchLetter) {
                button.classList.add("chosen");
                this.activePhrase.showMatchedLetter(letter);
                let result = this.checkForWin();
                if (result) {
                    this.gameOver(result);
                }
            } else {
                button.classList.add("wrong");
                this.removeLife();
            }
        }
    }

    /**
    * 
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */

     removeLife() {
        const  scoreBoard = document.getElementById('scoreboard').firstElementChild.children;
        this.missed += 1;
        if  (scoreBoard[this.missed - 1].outerHTML = `<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">`) {
            scoreBoard[this.missed - 1].outerHTML = `<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">`;
        }
        if (this.missed === 5) { 
            this.gameOver(this.checkForWin());
        }
    }

     /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */

    checkForWin() {
        const letterBoxes = document.getElementById('phrase').firstElementChild.children;
        let allFlipped = true;
        for (let i = 0; i < letterBoxes.length; i++) {
            let boxClass = letterBoxes[i].firstElementChild.className;
            if (boxClass.includes('hide')) {
                allFlipped = false
            }
        }
        return  allFlipped;
    }
    

     /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */

     gameOver(gameWon) {
        const buttons = keysDiv.querySelectorAll('button');
        buttons.forEach(button => button.disabled = true);
        setTimeout(function () {
        let overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'block';
        let sections = document.getElementsByClassName('section');
        for (let i = 0;  i < sections.length; i++) {
            sections[i].style.display = 'none';
        }
        let  message = document.getElementById('game-over-message');
        if (gameWon === true) {
            overlayDiv.className = 'win';
            message.innerText = 'Congratulations You WIN!';
        } else {
            overlayDiv.className = 'lose';
            message.innerText = `Sorry You Lost`;
        }
        startButton.innerText = 'Try Again';}, 2000);
    }
}