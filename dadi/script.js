// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?


const userName = prompt("Inserisci il tuo nome")
//1- Genera un numero random, sia per il giocatore sia per il computer
const nutUser = Math.floor(Math.random() * 6) + 1;
alert(`Il tuo numero è ${nutUser}`);

const nutComputer = Math.floor(Math.random() * 6) + 1;
alert(`Il numero del tuo avversario è ${nutComputer}`);

//2- Stabilire il vincitore, in base a chi fa il punteggio più alto.
if (nutUser > nutComputer) {
    alert(`Il vincitore sei tu ${userName}`);
} else if (nutComputer > nutUser) {
    alert(`Il vincitore è il Computer`);
} else {
    alert("Siete in parità");
}