/*
8 - Retorne as primeiras letras de cada palavra do nome 'George Raymond Richard Martin' em um array.
"GRRM"
p.s. NÃO É EM UM ARRAY é uma STRING
*/

let phrase = "George Raymond Richard Martin";
let arrWords = phrase.split(" ");

const newWord = arrWords.reduce((arr, item) => [...arr, item[0]], []);

console.log(newWord.join(''));


