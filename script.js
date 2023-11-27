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



