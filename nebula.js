const nebulagen = document.getElementById("nebulagen");
const characters = 571;
let currentCharacter = 0;
let randomIndex = 0;
let randomChoice = "";
let completeString = "";
const choices = ["`", "~", "1", "!", "2", "@", "3", "#", "4", "$", "5", "%", "6", "^", "7", "&", "8", "*", "9", "(", "0", ")", "=", "-", "+", "[", "{", "]", "}", "|", ";", ":", "q", "Q", "w", "W", "e", "E", "r", "R", "t", "T", "y", "Y", "u", "U", "i", "I", "o", "O", "p", "P", "a", "A", "s", "S", "d", "D", "f", "F", "g", "G", "h", "H", "j", "J", "k", "K", "l", "L", "z", "Z", "x", "X", "c", "C", "v", "V", "b", "B", "n", "N", "m", "M", ",", "<", ".", ">", "/", "?", " "];
while (currentCharacter < characters) {
    currentCharacter = currentCharacter + 1;
    randomIndex = Math.floor(Math.random() * choices.length);
    randomChoice = choices[randomIndex];
    console.log(randomChoice);
    completeString = completeString + randomChoice;
}
nebulagen.textContent = completeString;