//L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
const sceltaUtente = prompt("Scegli se giocare pari o dispari").toLowerCase(); //Scelta della giocata con conversione in minuscolo per sicurezza 
const sceltaUtenteNumero = parseInt(prompt("Scegli un numero da 1 a 5")); //Scelta del numeroda parte del giocatore 

//Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
const randomNumber = Math.floor(Math.random() * 5) + 1;

//Mandiamo in stampa le scelte fatte
console.log(`Hai scelto ${sceltaUtente} e il numero ${sceltaUtenteNumero}`);
console.log(`Il computer ha scelto il numero ${randomNumber}`)

//Sommiamo i due numeri
const sum = sceltaUtenteNumero + randomNumber;

//Mando in console la somma dei numeri 
console.log(`La somma delle giocate è ${sum}`)

//Creiamo una variabile che contenga un futuro valore Boolean per capire se è vero che è pari o no
let numeroPari;

//Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
function verificaPariDispari (sum) {
    if (sum % 2 === 0) {
        return "pari";
    } else {  
        return "dispari";
    }
}

//Creo una variabile che corrisponda alla funzione
let risultato = verificaPariDispari (sum);

//Mando in console il risultato se pari o dispari
console.log(`Il totale è ${risultato}`);

if ((sceltaUtente === risultato) ){
    console.log ("Congratulazioni!!! hai vinto")
} else {
    console.log ("Mi dispiace, hai perso!!!")
}