/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */
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
         this.activePhrase = null;
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
            if (numList.length === 0) {
                numList.push(randomListNumber);
                randomPhraseList.push((phraseList[randomListNumber]));
            } else if (numList.every(number => number !== randomListNumber)) {
                numList.push(randomListNumber);
                randomPhraseList.push((phraseList[randomListNumber]));
            }  
        }
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
     */

     startGame() {
        let overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'none';
        let gamePhrase = this.getRandomPhrase();
        let newGamePhrase  = new Phrase (gamePhrase);
        newGamePhrase.addPhraseToDisplay();
        this.activePhrase = newGamePhrase;
     }

     handleInteraction() {

     }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */

     removeLife() {
        const  scoreBoard = document.getElementById('scoreboard').firstElementChild.children;
        for (var i = scoreBoard.length - 1; i >= 0; i--) {
            if  (scoreBoard[i].outerHTML = `"<img src="images/liveHeart.png" alt="Heart Icon" height="35" width="30">"`) {
                scoreBoard[i].outerHTML = `"<img src="images/lostHeart.png" alt="Heart Icon" height="35" width="30">"`;
                return;
            }
        }
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver(this.checkForWin());
        }
     };

     /**
    * Checks for winning move
    * @return {boolean} True if game has been won, false if game wasn't
    won
    */

     checkForWin() {
        const phraseCheck = document.getElementById('phrase').firstElementChild.children;
        let unFlipped = 0; 
        for (let i = 0; i < phraseCheck.length; i++) {
            if (phraseCheck[i].className = 'hide') {
                unFlipped += 1;
            }
        }
        let result = unflipped < 1 ? true : false;
        return result;
     };

    

     /**
    * Displays game over message
    * @param {boolean} gameWon - Whether or not the user won the game
    */

     gameOver(gameWon) {
        let overlayDiv = document.getElementById('overlay');
        overlayDiv.style.display = 'display';
        let  message = document.getElementById('game-over-message');
        if (gameWon === true) {
            message.innerText = 'Congratulations You WIN!';
            overlayDiv.className = 'win';
        } else {
            message.innerText = `You Lost, the hidden phrase is:<br>${this.activePhrase}`;
            overlayDiv.className = 'loose';
        }
     };
 }