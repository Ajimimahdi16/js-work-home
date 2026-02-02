/*Scrivi un ciclo che analizzi ogni punteggio e stampi un giudizio basato su queste fasce:
90 - 100: "Eccellente 🌟"
70 - 89: "Buono ✅"
60 - 69: "Sufficiente ⚠️"
Sotto 60: "Insufficiente ❌*/

// la prima parte è la dichiarazione e l'inizzializzazione del indice.
//la seconda parte è la condizione di esecuzione all'interno del ciclo.
// la terza parte è il cambiamento dell' indice a ogni interazione. 
const punteggi = [45, 72, 88, 30, 95, 60, 100];

for ( let i = 0; i < punteggi.length; i++){
    if(punteggi[i] >= 90 && punteggi[i] <= 100){
       return "Eccellente";
    }
    else if (punteggi[i] >= 70 && punteggi[i]<= 89){
        return "Buono";
    }
    else if (punteggi[i] >= 60 && punteggi[i]<= 69){
        return " Sufficente";
    }
    else if (punteggi[i] < 60){
        return "Insufficente";
    }
    //else return "insufficente"; 

}

//console.log(punteggi[i]); //!non si mette 




/*calcola la somma solo dei numeri positivi e maggiori di 10.
Se il numero rispetta i criteri, aggiungilo a una variabile somma.
Se il numero è negativo, stampa un avviso: "Numero negativo saltato: [X]".
Stampa il totale finale alla fine del ciclo.*/


const numeri = [10, -5, 20, -2, 30, 8];
let somma = 0;

for (let i = 0; i < numeri.length; i++){
    if(numeri[i] > 10 ){
        somma += numeri[i];
    }
    else if ( numeri[i] < 0){
        console.log("Numero negativo saltato");
    }


}

console.log(somma);

 /*Crea un ciclo che calcoli la tabellina del 2 (da 2 a 20).
Se il risultato è 12, non stamparlo (usa il comando continue).
Per tutti gli altri risultati, stampa "Risultato: [valore]".
Se il risultato supera 16, interrompi del tutto il ciclo (usa il comando break).*/

for (let i = 1; i < 10; i++ ){
    
    if( i * 2 == 12 ){
        continue;
    }
    else if(i * 2 > 16){
        break;
    }
    else {
        console.log("risultato:"+ i );
    }


}


/*Data una serie di lanci di moneta: const lanci = ["testa", "croce", "testa", "testa", "croce"]; Crea due variabili: let testa = 0;e let croce = 0;.
Cicla l'array e incrementa la variabile corretta ogni volta che trovi "testa" o "croce".
Alla fine del ciclo, stampa: "Risultato finale: [X] testa e [Y] croce".*/

const lanci = ["testa", "croce", "testa", "testa", "croce"];
let testa = 0;
let croce = 0;

for (let i = 0; i < lanci.length; i++){
    if(lanci[i] === "testa"){
        testa++;
    }
    else croce++;
}
console.log("risultato finale" +testa);





/*let numeriNumeri = [27, -13, 89, 2, -187, 1989];

for (let i=0; i < numeriNumeri.length; i++){

    if (numeriNumeri[i]> 0 && numeriNumeri[i] % 3 == 0) {
        console.log(numeriNumeri[i]);
    }
}

for (let i = numeriNumeri.length-1; i >= 0; i = i-2){
    console.log(numeriNumeri[i]);

}*/

/*for ( let i = 1; i <= 20; i++){
    console.log(i*3);
}*/

let parolaDo = "superCaliFragiListiCheSpiRaLiDoSO";
parolaDo= parolaDo.toLowerCase();
let vocali = 0;

for (let i=0; i<parolaDo.length; i++){
    if(parolaDo[i]=== "a" || parolaDo[i]=== "e" || parolaDo[i]=== "o" || parolaDo[i]=== "i" || parolaDo[i]=== "u" ){
        vocali++;
    }
}
console.log(vocali);



//dato questo array  calcola la somma di questi prezzi 
const carrello = [10.50, 5.00, 25.00];
let prezzo = 0;
carrello.forEach( p => {
    if(p % 5 === 0){
    prezzo += p;
    }
}); 
console.log(prezzo);

const nomi = ["Marco", "Sonia", "Luca"];
nomi.forEach(n => console.log("ciao " +  n));

const numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numero.forEach(n => {console.log(n*5)});

///Hai un array di temperature: const temp = [18, 25, 32, 12, 40, 28].
//  Crea un nuovo array vuoto chiamato calde. 
// Obiettivo: Usa il forEach per controllare ogni temperatura.
//  Se è superiore a 30 gradi, aggiungila (.push()) all'array calde.
const temp = [18, 25, 32, 12, 40, 28];
const calde = [];

temp.forEach( temperatura => {
    if(temperatura > 30){
        calde.push(temperatura);
    }
        
    

});
console.log(calde);

/*Obiettivo: Stampa una stringa per ogni prodotto che dica: "Il prodotto [NOME] costa [PREZZO]€". 
Inoltre, calcola il prezzo totale di tutti i prodotti usando una variabile esterna.*/

const prodotti = [
    { nome: "Laptop", prezzo: 1000 },
    { nome: "Mouse", prezzo: 30 },
    { nome: "Tastiera", prezzo: 70 }
];

let prezzoTotale = 0;

prodotti.forEach(prodotto => {console.log("il prodotto", prodotto.nome , "costa", prodotto.prezzo );
    prezzoTotale += prodotto.prezzo
    
});
console.log(prezzoTotale);
    
//Hai un array di stringhe che dovrebbero essere email: const lista = ["test@test.com", "not-an-email", "info@web.it", "ciao@mondo"].
// Obiettivo: Usa il forEach per stampare in console solo le stringhe che contengono il simbolo @.
//  Per quelle che non lo contengono, stampa un messaggio di errore: "Errore: [STRINGA] non è valida".

const lista = ["test@test.com", "not-an-email", "info@web.it", "ciao@mondo"];

lista.forEach(email =>{
    if(email.includes("@"))
        console.log(email);
    else  console.log("Errore:", email, "non è valida");
   
});

const vini = ["Barolo", "Nebbiolo", "Chianti", "Brunello"];

vini.forEach((vino, i) => console.log((i+1).toString() + "° posto: " + vino)); 

//Hai un array di categorie:
//  const categorie = ["Elettronica", "Abbigliamento", "Casa"]. 
// Crea un array vuoto chiamato slugs. Obiettivo:Per ogni categoria, trasformala in minuscolo, aggiungi 
// il prefisso cat- e inseriscila in slugs. Risultato atteso: ["cat-elettronica", "cat-abbigliamento", "cat-casa"]
const categorie = ["Elettronica", "Abbigliamento", "Casa"];
let slugs = [];
categorie.forEach (nuova => {
    nuova ="cat -"+ nuova.toLowerCase();
    
    slugs += nuova
   
});
 console.log(slugs);

 //Obiettivo: Usa un forEach dentro un altro forEach (ciclo annidato) per calcolare la somma totale di tutte le vendite.
const vendite = [
    [10, 5, 20], // Scontrino 1 
    [15, 30], // Scontrino 2
    [5, 5, 5, 5] // Scontrino 3
];
let somme = 0;
vendite.forEach((settimana, i) =>{
    settimana.forEach(scontrino => {
        somme += scontrino;
    });
    console.log("incasso della settimana " + (i + 1).toString() + ": " + somme);
    somme = 0;
});


 
//Obiettivo: Usa il forEach per stampare il nome del prodotto solo se è disponibile (quantità > 0). 
// Se la quantità è superiore a 10,aggiungi alla stampa la scritta: " - [OFFERTA SPECIALE]" e applica uno sconto del 20% al prezzo dell'oggetto originale.

const magazzini = [
    { prodotto: "Zaino", quantita: 5, prezzo: 40 },
    { prodotto: "Sacca", quantita: 0, prezzo: 15 },
    { prodotto: "Marsupio", quantita: 12, prezzo: 20 }
];


magazzini.forEach(pro => {
    if (pro.quantita > 0){
         console.log("disponibile " + pro.prodotto);
        if(pro.quantita > 10)
        console.log("disponibile " + pro.prodotto + " - Offerta speciale " +  (pro.prezzo * 0.8) + " euro " );
    }
    
    });

























//Livello Base: Fondamenta degli Oggetti
//1. Creazione Semplice Crea un oggetto film con le proprietà titolo, regista e anno. Stampa in console una frase del tipo: "Il film [titolo] è stato diretto da [regista] nel [anno]".
 const film = [
    {titolo: "pino"},
    {regista: "pina"},
    {anno: 2025},

 ];
 console.log("Il film"[film.titolo], "è stato diretto da" [film.regista], "nel"[film.anno],);

//2. Manipolazione Dinamica Prendi l'oggetto film dell'esercizio precedente. Aggiungi una proprietà genere e modifica l'anno (magari avevi sbagliato a scriverlo). Infine, elimina la proprietà regista.
//3. Metodi dell'Oggetto Crea un oggetto calcolatrice che abbia due proprietà numeriche a e b, e un metodo somma che restituisca il risultato della loro addizione usando la parola chiave this.



//Livello Intermedio: Logica e Cicli
//4. Iterazione tra Proprietà Dato un oggetto voti (es: {matematica: 8, italiano: 7, inglese: 9}), scrivi un ciclo che sommi tutti i voti e calcoli la media aritmetica.
//5. Array di Oggetti Crea un array di 3 oggetti utente, ognuno con nome e online (booleano). Scrivi una funzione che accetti l'array e restituisca solo i nomi degli utenti che sono online.
