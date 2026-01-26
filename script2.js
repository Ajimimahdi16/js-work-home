/*1. Benvenuto nel Team
Hai un array di nomi di dipendenti: const team = ["Alice", "Bob", "Charlie"];.

Compito: Aggiungi "Diana" alla fine dell'array e poi rimuovi "Alice" dall'inizio.*/
const team = ["Alice", "bob","Charlie"];


team.push("diana");
//const remuoveTeam = team.shift[0];
team.shift();


/*2. Il Primo e l'Ultimo
Hai una lista di città: const cities = ["Roma", "Milano", "Napoli"];.

Compito: Rimuovi l'ultima città dalla lista e aggiungi "Torino" e "Bologna" all'inizio.*/
 const cities = ["Roma", "Milano", "Napoli"];
 cities.pop();
 cities.unshift("Torino", "Bologna");


/*3. Dove si trova l'intruso?
Hai un array di frutti: const fruits = ["mela", "pera", "ananas", "banana"];.

Compito: Trova la posizione dell'indice di "ananas". Se è presente, stampa un messaggio che dice: "L'ananas è alla posizione X".*/
const fruits = ["mela", "pera", "ananas", "banana"];
let index = fruits.indexOf("ananas");
if (index != null)
    console.log("L'ananas è nella posizione " + index); //!! IMPORTANTE


/*4. Trasformazione in Stringa
Hai un array di parole: const tags = ["javascript", "coding", "webdev"];.

Compito: Unisci tutte le parole in un'unica stringa separata da un trattino e uno spazio (" - ").*/
const tags = ["javascript", "coding", "webdev"];
let stringa = tags.join(" - ");

/*5. Creare una Sottolista
Hai una lista della spesa: const shop = ["Latte", "Pane", "Uova", "Farina", "Zucchero"];.

Compito: Crea un nuovo array che contenga solo gli elementi centrali ("Pane", "Uova", "Farina") assicurandoti che l'array originale rimanga intatto.*/
const shop = ["Latte", "Pane", "Uova", "Farina", "Zucchero"];
const newArray = shop.slice(1, 4);

/*6. Chirurgia degli Array
Hai una lista di numeri: const numbers = [10, 20, 50, 60];.

Compito: Inserisci i numeri 30 e 40 esattamente tra il 20 e il 50 con un'unica operazione che modifichi l'array originale.*/
const numbers = [10, 20, 50, 60];
numbers.splice(2, 0, 30, 40);
//numbers.splice(2, 2);


/*7. Gestione Coda Prioritaria
Hai una coda di pazienti: const patients = ["Paziente A", "Paziente B", "Paziente C"];.

Compito: È arrivata un'emergenza! Aggiungi "Codice Rosso" all'inizio della lista. Subito dopo, rimuovi l'ultimo paziente della coda (perché ha rinunciato all'attesa) e stampa il suo nome in console.*/
 const patients = ["Paziente A", "Paziente B", "Paziente C"];
 patients.unshift("Codice Rosso");
 var pazienteRimosso = patients.pop();
 console.log(pazienteRimosso);

 //console.log(patients.pop ("Paziente C "));
/*8. Sostituzione Mirata
Hai un array di colori: const colors = ["Rosso", "Verde", "Blu", "Giallo"];.

Compito: Individua dinamicamente la posizione del colore "Blu". Usa quell'indice per rimuovere "Blu" e inserire al suo posto "Viola" e "Arancione".*/
const colors = ["Rosso", "Verde", "Blu", "Giallo"];

let colorsIndex = colors.indexOf("Blu");
colors.splice(colorsIndex, 1, "Viola", "Arancione");

/*9. Backup e Svuotamento
Hai un array di canzoni: const playlist = ["Song 1", "Song 2", "Song 3", "Song 4"];.

Compito: Estrai le prime due canzoni e salvale in un nuovo array chiamato backup. Successivamente, cancella ogni elemento rimasto nell'array playlist originale.*/
const playlist = ["Song 1", "Song 2", "Song 3", "Song 4"];

let nuovoArray = playlist.slice(0,2);

playlist.splice(0, 4);



/*10. Il Formattatore di Percorsi
Hai un array che rappresenta i passaggi di un URL: const path = ["users", "admin", "settings", "profile"];.

Compito: 
1. Rimuovi il primo elemento ("users"). 
2. Aggiungi "api" all'inizio della lista. 
3. Trasforma il tutto in una stringa che rappresenti un percorso web (Esempio: /api/admin/settings/profile).*/
 const path = ["users", "admin", "settings", "profile"];

 path.shift();
 path.unshift("api");
 let url = path.join("/");