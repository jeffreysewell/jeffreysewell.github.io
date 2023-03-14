import { WordRotator } from './wordRotator.js';

const rotatingWordElement = document.getElementById('rotating-word');
const words = ['Welcome!','Willkommen!','مرحباً!','欢迎!','Fáilte!','Benvenuto!','いらっしゃいませ!',
'환영!','Powitanie!','Bem-vindo!','Bine ati venit!','Добро пожаловать!','Fàilte!',
'Bienvenido!','Hoş geldin!','خۇش كەپسىز!','Chào mừng!']; 
// Replace with your desired words
const duration = 2000; 

// Change the word every 2 seconds
new WordRotator(rotatingWordElement, words, duration);