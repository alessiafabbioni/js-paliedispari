// Creaimo la funzione per verificare se la parola è un palindroma

function Palindromo (word) {
    //Fai diventare la parola piccola
    const cleanedWord = word.replace(/ /g, "").toLowerCase();
    //Compara la parola con il suo inverso
    return cleanedWord === cleanedWord.split("").reverse().join("");

}


//inserimento delle variabili
const insertWord = prompt ("Inserisci una parola")
if (Palindromo (insertWord)) {
    console.log("La parola è un palindromo");
} else {
    console.log("La parola non è un palindromo")
}

const insertWordResult = Palindromo(insertWord)




/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) 
Dichiariamo chi ha vinto.
*/

// Funzione per inserimento di pari e dispari 

//Genera numero random

function getRandomNumber() {
    return Math.floor(Math.random() * 5) + 1;
}

//verfica se la somma dei numeri è pari o dispari

function Pari (number) {
    return number % 2 === 0;
}


//creiamo funzione per giocare al gioco


function giocoPariDispari () {
    const userChoice = prompt ("Scegli pari o dispari")
    console.log(userChoice);
    const userNumber = parseInt(prompt("Inserisci un numero da 1 a 5"));
    console.log(userNumber);
    const computerNumber = getRandomNumber();
    console.log (computerNumber);

    const somma = userNumber + computerNumber;

    let risultato;
    if (Pari(somma)) {
        result = 'pari';
    } else {
        result = 'dispari';
    }

    console.log(result);

    /*
    if (result === userChoice) {
        console.log("Hai vinto!");
    } else {
        console.log("Hai perso.");
    }
    */

    //Ma se io volessi combinare i due e far si che se la parola è palindromo e la user choice azzeccata allora lo user ha vinto?
    if (insertWordResult && result === userChoice) {
        console.log("Hai vinto! La parola è palindroma e la scelta è corretta")
    } else if (insertWordResult) {
        console.log("Perdi perché la parola è sì palindroma ma la scelta è sbagliata")
    } else if (result === userChoice) {
        console.log("Perdi perché hai sbagliato la scelta anche se la parola è palindroma")
    } else {
        console.log("Perdi e basta vez")
    }


}














giocoPariDispari ();

