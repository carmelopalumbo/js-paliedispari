// js

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

const userChoice = document.querySelector('.scelta_utente').value;

const userNum = document.querySelector('.num_utente').value;

const inputBtn = document.querySelector('.btn');

console.log(userChoice);
console.log(userNum);



function randomNumber(){
    return Math.floor(Math.random() * 5) + 1;
}

function checkPariDispari(num1, num2){
    const somma = num1 + num2;

    if(somma % 2) return 'dispari';
    return 'pari';
}