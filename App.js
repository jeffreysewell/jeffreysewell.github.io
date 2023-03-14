import { rotateWords } from './rotate-words.js';

// Call the rotateWords function initially to display a random word
rotateWords();

// Use setInterval to call the rotateWords function every 3 seconds
setInterval(rotateWords, 3000);