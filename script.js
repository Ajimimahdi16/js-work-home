
// Serve ad avere un codice riutilizzabile
// function controlloPersona (nome, età, città) { //KEYWORD FUNZIONE, NOME FUNZIONE, PARAMETRI (DA 0 A QUANTI VOGLIAMO)

//     return //QUALCOSA

// }

 function funzioneSuperSemplice () {
    return "sono semplice";
 }

let miaVariabile = funzioneSuperSemplice();
 console.log(miaVariabile);

 function funzioneUnPoMenoSemplice (numero) {
     if(numero % 2 == 0)
         return "pari";
     else
        return "dispari";
 }

 let numero = 20;
 console.log(funzioneUnPoMenoSemplice(numero));

function funzioneDifficile () {
    let numero = Math.floor((Math.random()*50)+1);
     if(numero % 2 == 0)
        return numero + " - pari";
    else
        return numero + " - dispari"; 
 }

let pariDispari = funzioneDifficile();
 console.log(pariDispari);

//ESERCIZIO 1
//Crea una funzione "lanciaDado" che genera un numero intero compreso tra 1 e 6
//Se il numero estratto è 6, stampa "Hai Vinto!"
//Altrimenti stampa "Ritenta, sarai più fortunato!"

function lanciaDado () {
    let numero = Math.floor((Math.random()* 6)+1);
    if (numero == 6 )
        return numero + "Hai Vinto!";
    else return  numero + "Ritenta, sarai più fortunato!";      
}
let newStringa = lanciaDado();
console.log (newStringa);

//ESERCIZIO 2
//Crea una funzione meteoSimulatore che genera un numero intero casuale tra 0 e +140
//Se la temperatura è 0 stampa "Sono diventato di ghiaccio"
//Se la temperatura è superiore a 100 stampa "Sto bollendo"
// Se le temperatura è superiore a 25 stampa "Fa già molto caldo"

function meteoSimulatore() {
    let numero = Math.floor((Math.random()* 140)+1);
         if (numero == 0 )
         return  numero + "Sono diventato di ghiaccio";
        
    else if (numero > 100)
        return numero + "Sto bollendo";
        
    else if (numero > 25)
        return numero + "Fa già molto caldo";
        

 }
 console.log (meteoSimulatore());



//ESERCIZIO 3
//Crea la funzione login che accetta 1 parametro in ingresso "userName"
//Se lo userName inserito è "coglionazzo" stampa "login effettuato"
//Altrimenti stampa "errore di autenticazione, riprova"

function login (userName){

    if (userName == "coglionazzo")
        return "login effettuato";
    else return "errore di autenticazione, riprova";

}
let mioUser = "mahdi";
console.log(login(mioUser));


// 1. Il Controllo della Temperatura Scrivi un programma che riceva una temperatura t.

// Se t è minore di 15, stampa "Freddo".
if ( t < 15){
    return "Freddo";
}

// Se t è tra 15 e 25 (inclusi), stampa "Gradevole".
if ( t >= 15 && t <= 25){
    return "Gradevole";
}

// Se t è maggiore di 25, stampa "Caldo".
if ( t > 25){
    return "Caldo";
}

// 2. Accesso al Club Crea un sistema che verifichi l'età di un utente.

// Se l'età è 18 o più, stampa "Accesso consentito".
// Altrimenti, stampa "Accesso negato".
if ( eta >= 18){
    return "Accesso consentito";
}
else return "Accesso negato";


// 3. Pari o Dispari? Scrivi un programma che verifichi se un numero è pari o dispari utilizzando l'operatore modulo %. Stampa il risultato.

if (numero % 2 === 0){
    return "pari";
}
else return " dispari";

// Livello Intermedio: Catene di else if

// 4. Calcolatore di Voti Ricevi un punteggio da 0 a 100 e convertilo in giudizio:

// 90-100: "Eccellente"

// 70-89: "Buono"

// 60-69: "Sufficiente"

// Sotto 60: "Insufficiente"
if(punteggio >= 90 && punteggio <= 100){
    return "Eccellente";
}
else if(punteggio >=70 && punteggio <= 89 ){
    return "Buono";
}
else if(punteggio >=60 && punteggio <= 69 ){
    return "Sufficiente";
}
else return "Insufficiente";




// 5. Il Semaforo Intelligente Data una variabile colore (stringa):

// Se "Verde", stampa "Passa".

// Se "Giallo", stampa "Rallenta".

// Se "Rosso", stampa "Fermati".

// Per qualsiasi altro valore, stampa "Semaforo guasto".

if(semaforo == "Verde"){
 return "Passa";
}
else if(semaforo == "Giallo"){
 return "Rallenta";
}
else if(semaforo == "Rosso"){
 return "Fermati";
}
else return "Semafori guasto";


// Livello Avanzato: Condizioni Annidate (Nested)

// 6. Validazione Login (Annidata) Crea un sistema con username e password.

// Se lo username è corretto ("admin"):

// Controlla la password. Se è "12345", stampa "Login effettuato".

// Altrimenti, stampa "password errata".

// Se lo username è sbagliato, stampa "Utente non trovato".

//let login = "Annidata";
//const password = 12345;

if( userName == "admin" ){
    
    if (password == 12345){
        return "Login effettuato";
    }
    else
        return "password errata";
}   

else {
    return "Utente non trovato";
}





// 7. Selezione Taglia Abbigliamento Scrivi un programma che riceva il sesso ("M" o "F") e l'altezza in cm.

// Se "F":

// Sotto 160: "Small"

// Da 160 a 175: "Medium"

// Sopra 175: "Large"
if (sesso = "F") {
    if (taglia < 160)
        return "Small";
    else if (taglia >= 160 && taglia < 175)
        return "Medium";
    else
        return "Large";
}

// Se "M":

// Sotto 170: "Small"

// Da 170 a 185: "Medium"

// Sopra 185: "Large"
if (sesso = "M") {
    if (taglia < 170)
        return "Small";
    else if (taglia >= 170 && taglia < 185)
        return "Medium";
    else
        return "Large";
}

// 8. Calcolo dello Sconto Fedeltà Ricevi l'importo della spesa e se l'utente ha la tessera fedeltà (booleano).

// Se ha la tessera:

// Se NON ha la tessera:

// Spesa > 150€: sconto 5%.

// Altrimenti: nessun sconto.

if (tessera = true) {
    if (spesa > 100)
        return sconto = "20%";
    else
        return sconto = "10%";
}
else {
    if (spesa > 150)
        return "5%";
    else
        return "no sconto";
}


// Livello Expert: Logica Combinata

// 9. Classificazione Triangoli Dati tre lati a, b, c, verifica prima se possono formare un triangolo (la somma di due lati deve essere maggiore del terzo).

// Se sì:

// Se tutti i lati sono uguali: "Equilatero".

// Se solo due sono uguali: "Isoscele".

// Se tutti diversi: "Scaleno".

// Se no: stampa "Misure non valide".

if (a + b > c || a + c > b || b + c > a) {
    if (a == b && b == c)
        return "Equilatero";
    else if (a == b || b == c || a == c)
        return "Isoscele";
    else
        return "Scaleno";
}
else
    return "Misure non valide";

// 10. Il Consulente per i Prestiti Determina se un cliente può ottenere un prestito basandoti su: reddito, età e storia_creditizia (punteggio 0-100).

// Se l'età è tra 18 e 80:

// Se il reddito è > 30.000:

// Se la storia creditizia è > 70: "Prestito Approvato".

// Altrimenti: "Richiesta Garante".

// Altrimenti (reddito basso): "Reddito insufficiente".

// Altrimenti: "Età non idonea".

if (età >= 18 && età <= 80) {
    if (reddito > 30000) {
        if (storiaCreditizia > 70)
            return "Prestito Approvato";
        else
            return "Richiesto Garante";
    }
    else
        return "Reddito insufficiente";
}
else
    return "Età non idonea";


// Livello Sfida: Logica Complessa e Simulazioni

// 11. Sistema di Prenotazione Cinema Scrivi un programma che calcoli il prezzo del biglietto basandosi su età e giorno_settimana (es. "Lunedi", "Martedi", ecc.).

// Se è "Mercoledi":

// Prezzo fisso per tutti: 5€.

// Negli altri giorni:

// Se l'età è < 12: prezzo 6€.

// Se l'età è > 65: prezzo 7€.

// Altrimenti: prezzo pieno 10€.

// Extra: Se il giorno è "Sabato" o "Domenica", aggiungi 2€ di supplemento a tutte le categorie sopra elencate (tranne per il mercoledì).

if(mercoledi == true){
    return "prezzo fisso 5 euro";
}
    
else if (lunedi||martedi||giovedi||venerdi){
    if (eta < 12 )
            return "prezzo 6 euro";

    else if (eta > 65)
            return "prezzo 7 euro";
        
    else return "prezzo pieno 10 euro ";
}
    
else if (sabato || domenica){
    if (eta < 12 )
            return "prezzo 8 euro";

    else if (eta > 65)
            return "prezzo 9 euro";
        
    else return "prezzo pieno 12 euro ";
}

    
// 12. Valutazione Qualità dell'Aria (AQI) Ricevi un valore numerico di PM2.5.

// Se il valore è tra 0 e 50: "Buona".

// Se tra 51 e 100:

// Se l'utente è "Soggetto Allergico", stampa "Accettabile con cautela".

// Altrimenti, stampa "Moderata".

// Se tra 101 e 150: "Insalubre per gruppi sensibili".

// Sopra 150:

// Se sopra 300: stampa "PERICOLO EXTREMO".

// Altrimenti: "Insalubre".

if (valore >= 0 && valore <= 50){
   return "Buona";
}

else if ( valore >= 51 && valore <= 100){
    if(soggettoAllergico == true)
        return "Accetabile con cautela ";
    
    else "Moderata";
}

if( valore >= 101 && valore <=150){
    return "Insalubre per gruppi sensibili";
}
   
if ( valore >= 150 && valore <= 300){
        return "Insalubre";
}
else if ( valore > 300){
        return " PERICOLO EXTREMO";
}


    


// 13. Algoritmo di Spedizione Pacchi Determina il costo di spedizione basato su peso (kg) e destinazione ("Nazionale" o "Internazionale").

// Se "Nazionale":

// Peso < 5kg: 10€.

// Peso tra 5kg e 20kg: 20€.

// Sopra 20kg: 20€ + 2€ per ogni kg extra.

// Se "Internazionale":

// Se la destinazione è "Europa":

// Prezzo fisso 30€.

// Se "Extra-UE":

// Peso < 10kg: 50€.

// Altrimenti: 100€.

if (Nazionale){
    if (peso < 5)
        return "costo di spedizione 10 euro ";
    
    else if ( peso >= 5 && peso <= 20)
        return " costo spedizione 20 euro ";
    
    else if ( peso > 20)
        return " costo spedizione 20 euro + 2 euro per ogni kg extra ";
}

else if(internazionale && europa){
     return " prezzo fisso 30 euro";
}

else if (ExtraUE){
    if( peso <10)
     return " costo della spedizione 50 euro";
}

else return "costo della spedizione 100 euro";


// 14. Calcolo Tasse Progressivo (Semplificato) Ricevi il reddito_annuo. Calcola l'imposta:
// Se reddito <= 15.000: tassa del 23%.
// Se reddito > 15.000 e <= 28.000:
// Paga il 23% sui primi 15.000 + il 27% sulla parte eccedente i 15.000.
// Se reddito > 28.000:
// Paga il 23% sui primi 15.000 + il 27% sui successivi 13.000 + il 35% sulla parte eccedente i 28.000.
// Nota: Qui dovrai annidare i calcoli o usare una logica sequenziale precisa per non sbagliare gli scaglioni.
let tasseDaPagare;
if(reddito <= 15000){
    tasseDaPagare = reddito * 0,23;
}
else if (reddito >= 15000 && reddito <= 28000){
    tasseDaPagare = (15000 * 0,23) + (reddito-15000)*0,27;
}
else if ( redditto > 28000){
    tasseDaPagare = (15000 * 0,23) + ( 13000 * 0,27) + (reddito-28000)* 0,35;
}


// 15. Simulatore di Battaglia RPG Gestisci un turno di attacco tra un Eroe e un Mostro.

// Se l'Eroe decide di "Attaccare":

// Genera un numero casuale per la precisione (da 1 a 100).


// Se precisione > 90: ""Colpo Critico! Danno raddoppiato"".

//  Se precisione > 20: "Colpo a segno!".

// Altrimenti: "Attacco fallito!".

// Se l'Eroe decide di "Difendere":

// Se la vita dell'Eroe è sotto il 20%: "Difesa disperata: scudo potenziato".

// Altrimenti: "Difesa standard".

// Se l'azione non è né "Attaccare" né "Difendere": "Azione non valida, perdi il turno".

if (attacare){

    let precisione = (Math.floor((Math.random) * 100 ) + 1);

    if(precisione > 90)
        return "Colpo Critico! Danno raddoppiato";
    else if ( precisione > 20)
        return "colpo a segno!";
    else return "Attacco fallito!";
}

 if(difendere){

    if(vitaEroe < 0,2)
        return "Difesa disperata: scudo potenziato";

    else if (vitaEroe > 0,2) 
        return "Difesa standar";
}
else
     return  "Azione non valida, perdi il turno";

