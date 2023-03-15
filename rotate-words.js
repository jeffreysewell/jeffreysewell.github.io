import { wordList } from './app.js';

// Get a reference to the rotating word element
const rotatingWord = document.getElementById('rotating-word');

// Define a function to rotate the words
export function rotateWords() {
	// Pick a random word from the list
	const randomWord = wordList[Math.floor(Math.random() * wordList.length)];
	// Set the text content of the rotating word element to the random word
	rotatingWord.textContent = randomWord;
}