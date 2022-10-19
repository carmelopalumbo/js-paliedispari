// js

/* L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri
Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
Dichiariamo chi ha vinto. */

//variabili
const userChoice = document.querySelector('.scelta_utente');
const inputBtn = document.querySelector('.gioca');
const resetBtn = document.querySelector('.reset');
const winResult = document.querySelector('.result');
const outputCpu = document.querySelector('.num_cpu');
let userNum = document.querySelector('.num_utente');


//resetta tutti campi
resetBtn.addEventListener('click', function(){
    userChoice.selectedIndex = 0;
    userNum.selectedIndex = 0;
    winResult.innerHTML = '';
    outputCpu.innerHTML = '';
})

inputBtn.addEventListener('click',function(){

    //blocca il programma se non vengono inseriti entrambi i valori
    if(userNum.value === "" || userChoice === "" ){
        winResult.innerHTML = 'INSERISCI VALORI VALIDI!';
    }else{
        //verifico il vincitore
        let cpuNum = randomNumber();
        outputCpu.innerHTML = `Il numero scelto dalla CPU é ${cpuNum}.`
        if(userChoice.value === checkPariDispari(userNum.value, cpuNum)){
            console.log('utente vince');
            winResult.innerHTML = 'UTENTE VINCE!'
        }else{
            console.log('cpu vince');
            winResult.innerHTML = 'CPU VINCE!'
            }
        }
    })

// funzioni

//estraggo un numero random da 1 a 5
function randomNumber(){
    return Math.floor(Math.random() * 5) + 1;
}

//fa la somma dei due numeri e verifica se pari o dispari
function checkPariDispari(num1, num2){
    // console.log(num1, num2);
    const somma = parseInt(num1) + parseInt(num2);
    console.log(somma);
    if(somma % 2) return 'dispari' ;

    return 'pari';
}