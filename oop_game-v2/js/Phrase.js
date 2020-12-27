/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */
class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /**
    * Display phrase on game board
    */

    addPhraseToDisplay() {
        const ulElement = document.getElementById('phrase').firstElementChild;
        for (let i = 0; i < this.phrase.length; i++) {
            let className;
            let letter = this.phrase[i];
            let liElement = document.createElement('li');
            if (/\s/.test(letter)) {
                className = 'space';
            } else {
                className = 'hide letter';
            } 
            
            liElement.innerHTML = `<li class="${className} ${letter}">${letter}</li>`;
            ulElement.appendChild(liElement);
        } 
    }

    /**
    * Checks if passed letter is in phrase
    * @param (string) letter - Letter to check
    */

    checkLetter(letter) {
        let match = false;
        for (let i = 0; i < this.phrase.length; i++) {
            if (this.phrase[i] === letter) {
                match = true;
                this.showMatchedLetter(this.phrase[i]);
            }
        }
        return match;
    }

    /**
    * Displays passed letter on screen after a match is found
    * @param (string) letter - Letter to display
    */

    showMatchedLetter(letter) {
        const letterBoxes = document.getElementById('phrase').firstElementChild.children;
        for (let i = 0; i < letterBoxes.length; i++) {
            if (letterBoxes[i].firstElementChild.innerText === letter) {
                letterBoxes[i].firstElementChild.className = 'show';
            }
        }
        if (game.checkForWin()) {
            game.gameOver(true);
        }
    }
}