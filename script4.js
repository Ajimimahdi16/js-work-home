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
