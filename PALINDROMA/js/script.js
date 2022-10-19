// js

/*Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/


const inputBtn = document.querySelector('.btn');

const result = document.getElementById('risultato');

// console.log(firstWord);
// console.log(secondWord);

inputBtn.addEventListener('click', function(){
    let firstWord = document.getElementById('parola_uno').value.toLowerCase();
    const check = checkPalindrome(firstWord);
    if(check){
        result.classList.remove('red');
        result.innerText = 'LA PAROLA E\' PALINDROMA!';
        result.classList.add('green');
    }else{
        result.classList.remove('green');
        result.innerText = 'LA PAROLA NON E\' PALINDROMA!';
        result.classList.add('red');
    }
})

function checkPalindrome(p1){

    let revFirst = '';

    for(let i = p1.length - 1; i >= 0; i--){
        revFirst += p1[i];
    }


    if(revFirst === p1) return true;

    return false;
}
