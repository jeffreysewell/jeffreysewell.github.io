import { WordRotator } from './WordRotator.js';

const rotatingWordElement = document.getElementById('rotating-word');
const words = ['Welcome', 'Willkommen', '欢迎', 'Benvenuto', 'いらっしゃいませ', 'Bem-vindo', 'Добро пожаловать', 'Bienvenido'];
// Replace with your desired words
const duration = 2000;
// Replace with your desired duration in milliseconds

new WordRotator(rotatingWordElement, words, duration);
