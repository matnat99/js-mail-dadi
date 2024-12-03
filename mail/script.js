// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.
// Non è necessario provvedere alla validazione delle email.

//1- Crea una lista di utenti
const email = ["mattia07@gmail.com", "samuele1@gmail.com", "stefano6@gmail.com", "rocco7@gmail.com", "maria4@gmail.com"];
//2- Chiedi all'utente la sua email
const emailUser = prompt("Inserisci la tua email")
//3- Controlla che sia nella lista degli utenti
let access = false;
for (let i = 0; i < email.length && access === false; i++) {
    if (email[i] === emailUser) {
        access = true;
    }
}
//4- Allert con messaggio appropriato sull’esito del controllo
if (access) {
    alert(`Ciao ${emailUser}! La tua email è valida, puoi accedere.`);
} else {
    alert(`Ciao ${emailUser}, la tua email non è registrata.`);
}