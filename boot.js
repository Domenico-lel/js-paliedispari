/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/


// Funzione che implementa il gioco Pari e Dispari
function giocaPariDispari(sceltaUtente, numeroUtente) {
    // Genera un numero casuale per il computer tra 1 e 5
    var numeroComputer = Math.floor(Math.random() * 5) + 1;

    // Calcola la somma dei numeri dell'utente e del computer
    var somma = numeroUtente + numeroComputer;

    // Determina se la somma è pari o dispari
    var risultato = somma % 2 === 0 ? "pari" : "dispari";

    // Confronta il risultato con la scelta dell'utente per determinare il vincitore
    // Restituisce un messaggio di vittoria o sconfitta
    return risultato === sceltaUtente
        ? "Hai vinto! La somma è " + risultato + "."
        : "Hai perso. La somma è " + risultato + ".";
}

// Chiede all'utente di scegliere pari o dispari
var sceltaUtente = prompt("Scegli pari o dispari:").toLowerCase();

// Chiede all'utente di inserire un numero da 1 a 5
var numeroUtente = parseInt(prompt("Inserisci un numero da 1 a 5:"), 10);

// richiamo la funzione e stampo il risultato
var risultatoGioco = giocaPariDispari(sceltaUtente, numeroUtente);
alert(risultatoGioco);

