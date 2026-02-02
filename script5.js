//Usa forEach quando devi scansionare l'array per fare qualcosa (stampare, sommare, loggare), ma non ti serve un nuovo array.
//Basic Log: Dato const frutti = ["mela", "banana", "pera"], stampa in console ogni frutto preceduto dal testo "Frutto: ".
frutti = ["mela", "banana", "pera"];
frutti.forEach(frutta => console.log(frutta));
//Somma: Dato un array di numeri, calcola la loro somma totale e salvala in una variabile let totale = 0.
const numeri = [1, 4, 6, 4, 6, 8, 9];
let totale = 0;
numeri.forEach( n =>  {
    totale += n;
});
console.log(totale);
//Contatore: Dato un array di nomi, conta quanti nomi iniziano con la lettera "A".
const nomi = ["fabio", "maria", "angela", "fabiana"];
let quanto = 0;
nomi.forEach(nome=> { 
    if(nome.startsWith("a")){
        quanto++;
    
    }

});console.log(quanto);

 //Logica condizionale: Dato un array di oggetti prodotti (con nome e prezzo), stampa "Caro" se il prezzo è > 50, altrimenti "Economico".
 const prodotti = [
    {nome: "PC", prezzo: 1000}, 
    {nome: "Penna", prezzo: 2}];
    prodotti.forEach(p=>{
        if( p.prezzo > 50 ){
            console.log("caro");
        }
            
       else console.log("economico");

    });

//    Usa map quando vuoi ottenere un nuovo array della stessa lunghezza, ma con i dati modificati.

// Dato un array di numeri, crea un nuovo array con i numeri moltiplicati per 2.
const numerissimi = [1, 4, 6, 4, 6, 8, 9];
numerissimi.map(n => console.log(n * 2));

// Dato un array di nomi in minuscolo, crea un array con i nomi tutti in MAIUSCOLO.
const nomiDiversi = ["fabio", "maria", "angela", "fabiana"];
nomiDiversi.map(noma => console.log(noma.toUpperCase()));

//Dato un array di oggetti utente { nome, email, id }, crea un array che contenga solo le email.
const utenti = [{
    nome: "mahdi",
    email: "ajimimahdi1@gmail.com",
    id: "super"

}];
utenti.map(u => console.log(u.email));
//Prezzi Scontati: Dato un array di prezzi, crea un array dove ogni prezzo è ridotto del 20%.
const scontati = [100, 200];
scontati.map(s => console.log(s * 0.8));




//Usa filter quando vuoi un nuovo array che contenga solo gli elementi che superano un "test".

// Pari: Dato un array di numeri, tieni solo i numeri pari.

//Parole Lunghe: Dato un array di parole, tieni solo quelle che hanno più di 5 lettere.

//Disponibilità: Dato un array di oggetti prodotti { nome, disponibile: boolean }, tieni solo quelli disponibili.

// Range di Prezzo: Filtra un array di prodotti tenendo solo quelli che costano tra 10€ e 50€.

// Ricerca: Dato un array di nomi e una stringa ricerca, filtra i nomi che contengono quella stringa (case-insensitive).



//Usa find quando ti serve un solo elemento (il primo che soddisfa la condizione) e non un array.

// numero: Trova il primo numero maggiore di 10 in un array di numeri.

// Cerca per ID: Dato un array di utenti, trova l'utente che ha id === 3.

// Cerca Nome: Trova il primo nome che inizia con la lettera "Z".

// Validazione: In un array di file { nome, estensione }, trova il primo file che ha estensione .pdf.

// Stato Attivo: Trova l'ultimo post pubblicato (supponendo che l'array sia ordinato per data) che ha lo stato "pubblicato".