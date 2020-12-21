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
        this.activePhrase = gamePhrase;
     }

     handleInteraction() {

     }

     removeLife() {

     }

     checkForWin() {

     }

     gameOver() {

     }
 }