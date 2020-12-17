/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const game = new Game();
const randomPhrase = game.getRandomPhrase();
console.log(randomPhrase);
const phrase = new Phrase(randomPhrase);
phrase.addPhraseToDisplay();