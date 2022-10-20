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
const userNum = document.querySelector('.num_utente');


//resetta tutti campi
resetBtn.addEventListener('click', function(){
    resetGame(userChoice, userNum, winResult, outputCpu);
})

inputBtn.addEventListener('click',function(){
    //blocca il programma se non vengono inseriti entrambi i valori
    checkWinner(userNum, userChoice, winResult, outputCpu);
    })



// funzioni

//estraggo un numero random da 1 a 5
function randomNumber(){
    return Math.floor(Math.random() * 5) + 1;
}

//fa la somma dei due numeri e verifica se pari o dispari
function checkPariDispari(num1, num2){
    const somma = parseInt(num1) + parseInt(num2);
    if(somma % 2) return 'dispari' ;

    return 'pari';
}

function resetGame(userChoice, userNum, winResult, outputCpu){
    userChoice.selectedIndex = 0;
    userNum.selectedIndex = 0;
    winResult.innerHTML = '';
    outputCpu.innerHTML = '';
}

function checkWinner(userNum, userChoice, winResult, outputCpu){
    if(userNum.value === "" || userChoice.value === "" ){
        winResult.classList.add('text-warning');
        winResult.innerHTML = 'INSERISCI VALORI VALIDI!';
    }else{
        //verifico il vincitore
        winResult.classList.remove('text-warning');
        let cpuNum = randomNumber();
        outputCpu.innerHTML = `Il numero scelto dalla CPU é ${cpuNum}.`;
        if(userChoice.value === checkPariDispari(userNum.value, cpuNum)){
            winResult.innerHTML = 'UTENTE VINCE!';
        }else{
            winResult.innerHTML = 'CPU VINCE!';
            }
        }
}