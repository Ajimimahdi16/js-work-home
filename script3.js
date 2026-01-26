/*for (dichiarazione/inizializzazione indice, condizione di run, evoluzione dell’indice ad ogni ciclo)

ad es.

for(let i=0; i<10; i++)
for(let i=100; i>0; i–)
ecc. ecc.


Esercizi.

Livello: Base (Sintassi e Conteggio)
1. Il Conto alla Rovescia Scrivi un ciclo che stampi i numeri da 10 a 1. Al termine, deve stampare "Decollo!".*/
for (i = 10; i < 0; i++ ){
    console.log(i)
}

//2. Tabellina del 5 Crea un programma che stampi i risultati della tabellina del 5 (da 5×1 a 5×10) nel formato: "5 x i = risultato".
for ( let i = 1; i<= 10; i++){
    console.log(i * 5);
}

//3. Numeri Pari in un Range Dato un numero di partenza e uno di fine (es. 1 e 20), stampa solo i numeri pari compresi nell'intervallo.
const pari = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]; //! importante i e gia un numero basta aggiungere i < 21 e nel if scrivi i

for ( let i = 0; i < pari.length; i++){
      
   if (pari[i] % 2 === 0) {
        console.log(pari[i]);
    }
}
//Livello: Intermedio (Array e Stringhe)
//4. Somma degli Elementi Dato un array di numeri [10, 20, 30, 40, 50], usa un ciclo for per calcolare la somma totale degli elementi e stampala.
const array = [10, 20, 30, 40, 50];
let somma = 0;
for ( let i = 0; i < array.length; i++){
    somma += array[i];
       
}
 
 console.log(somma);


//5. Trova il Massimo Dato un array di numeri disordinati, trova il valore più alto senza usare Math.max().
let numeri = [7, 2, 4, 5, 6, 10, 32];
let max = 0;
for (i = 0; i < numeri.length; i++){
    if(numeri[i]> max)
        max=numeri[i];
}
console.log(max);

//6. Inverti una Stringa Data una stringa (es. "Javascript"), usa un ciclo for che parta dall'ultimo carattere per stamparla al contrario ("tpircsavaJ").
  const invertiStringa = "javascript";

  let nuovaStringa = "";
  
  for (let i = invertiStringa.length-1 ; i >= 0; i--){
    nuovaStringa += invertiStringa[i];


    console.log(nuovaStringa);
} 

//Livello: Avanzato (Logica e Filtri)
//7. Conta le Vocali Scrivi una funzione che riceve una stringa e, usando un ciclo for, conta quante vocali (a, e, i, o, u) sono presenti al suo interno.
let parola = " ciao come stai";
let vocali = 0;
for ( let i=0; i< parola.length; i++){
    if(parola[i]=="a"||parola[i]=="e"||parola[i]=="i"||parola[i]=="o"||parola[i]=="u");
    vocali++;
}
console.log(vocali);
//8. Generatore di ID Crea un ciclo che generi una stringa casuale di 8 caratteri alfanumerici pescando da una variabile const chars = "ABC...123".
let char = ["ddonodnvind6628411c5sjbcbd"];
let parolaLunga = Math.floor(Math.random()*8)+1;
let parolaNuova = "";
for (let i = 0; i < parolaLunga; i++){
    parolaNuova+=char[Math.floor(Math.random()*char.length)+1];
}
console.log(parolaNuova);

//9. FizzBuzz Classico Scrivi un ciclo da 1 a 30. Se il numero è divisibile per 3 stampa "Fizz", se per 5 "Buzz", se per entrambi "FizzBuzz", altrimenti stampa il numero.
 for (let i = 1; i <= 30; i++){
    if(i % 3 === 0){
        console.log("Fizz");
    }
    else if ( i % 5 === 0){
        console.log("Buzz");
    }
    else if ( i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
    }
    else console.log(i);
 }
 
//Livello: Sfida (Cicli Annidati e Strutture)
/*10. Piramide di Asterischi Usa cicli for annidati per stampare una piramide di questo tipo in console:
//Plaintext
*
**
***
****
******/

for ( let i = 0; i < 1; i++) {
	console.log("*");
	for ( let i = 0; i < 1; i++) {
		console.log("**");
		for ( let i = 0; i < 1; i++) {
			console.log("***");
			for ( let i = 0; i < 1; i++) {
				console.log("****");
				for ( let i = 0; i < 1; i++)
					console.log("*****");
			}
}
}
}

//11. Filtro Oggetti Complessi Dato un array di oggetti "Utente" (ogni oggetto ha nome e eta), usa un ciclo per creare un nuovo array che contenga solo i nomi degli utenti che hanno più di 18 anni.
const utenti = [ { nome: "Alice", eta: 25 }, { nome: "Bob", eta: 17 }, { nome: "Charlie", eta: 30 }, { nome: "Debra", eta: 14 }, { nome: "Erik", eta: 22 }, { nome: "Fiona", eta: 16 } ];
let maggiorenni = [];
for (let i = 0; i < utenti.length; i++)
	if (utenti[i].eta >= 18)
		maggiorenni.push(utenti[i].nome);
let msg= "Nomi dei maggiorenni: " + maggiorenni;
