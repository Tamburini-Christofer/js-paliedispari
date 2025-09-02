//Chiedere all'utente di inserire una parola
const inputUtente = prompt("Inserisci una parola e io vedrò se è palidroma");
//Creare una funzione per capire se la parola inserita è palindroma
function verificaPalindromo (input) {
//Creiamo una variabile che contenga la parola riversata
//Essa sarà inizialmente vuota.
    let reversedInput = "";
//Cicliamo l'input con un ciclo For per rebaltare la parola
    for (let i = input.length - 1; i >= 0; i--) {
//Assegnamo al valore reversedInput il valore delle singole lettere
    reversedInput += input[i];
    }
//Returniamo il valore alla variabile revertedWord
    return reversedInput === input;
}

//Otteniamo la parola invertita
const parolaInvertita = verificaPalindromo(inputUtente);

//Creiamo un ciclo if che possa dimostrare per capire se è palindroma e mandare 
//in console. 
    if (parolaInvertita === true) {
        console.log (`La parola che hai scelto ${inputUtente} è palindroma`)
    } else {
        console.log (`La parola che hai scelto ${inputUtente} NON è palindroma`)
    } 