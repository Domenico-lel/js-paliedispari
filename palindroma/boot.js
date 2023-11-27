/*Palidroma
Chiedere all’utente di inserire una parola
Creare una funzione per capire se la parola inserita è palindroma*/



// Funzione per verificare se una parola è palindroma
function isPalindroma(parola) {
    // Inverte la parola
    var parolaInvertita = parola.split('').reverse().join('');
    
    // Confronta la parola originale con la parola invertita
    return parola === parolaInvertita;
}

// Chiede all'utente di inserire una parola
var inputUtente = prompt("Inserisci una parola:");

// Chiamata della funzione e visualizzazione del risultato
var risultato = isPalindroma(inputUtente);

// Mostra il risultato in base alla parola
alert(risultato
    ? "La parola è palindroma!"
    : "La parola non è palindroma."
);
