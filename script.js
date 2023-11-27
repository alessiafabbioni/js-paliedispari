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

