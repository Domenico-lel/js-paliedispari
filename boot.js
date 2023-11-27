/*Pari e Dispari
L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
Sommiamo i due numeri Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione) Dichiariamo chi ha vinto.*/


function giocaPariDispari(sceltaUtente, numeroUtente) {
    var numeroComputer = Math.floor(Math.random() * 5) + 1;
    var somma = numeroUtente + numeroComputer;
    var risultato = somma % 2 === 0 ? "pari" : "dispari";
    return risultato === sceltaUtente ? "Hai vinto! La somma è " + risultato + "." : "Hai perso. La somma è " + risultato;
}

