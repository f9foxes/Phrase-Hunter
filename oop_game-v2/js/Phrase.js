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
            if (/\s/.test(letter)) {
                className = 'space';
            } else {
                className = 'hide letter';
            } 
            let liElement = document.createElement('li');
            liElement.innerHTML = `<li class="${className} ${letter}">${letter}</li>`;
            ulElement.appendChild(liElement);
        }
    }

    checkLetter() {

    }

    showMatchedLetter() {
        
    }
}