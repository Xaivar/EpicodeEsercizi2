/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//I datatype sono: String, Number, Boolean, Null, Undefinied;
//String: Indica un Datatype contenente Testo
//Number: Indica un DataType contenente valori numerici.
//Boolean: Indica un DataType contenente solo valore Vero oppure Falso;
//Null: Indica un DataType che non possiede un valore;
//Undefinied: Indica un DataType che possiede un valore non definito;

// -------------------------------------------------------------------------------

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name = "Arcangelo";

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/


/* SCRIVI QUI LA TUA RISPOSTA */

let a = 12;
let b = 20;
let somma = a + b;
console.log("La somma è: " + somma);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let x = 12;

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

//Impossibilità di riassegnare un valore ad una variabile dichiarata "name"
//Cannot redeclare block-scoped variable 'name'.ts(2451)
//let name: string 

//Impossibilità di riassegnare un valore ad una costante dichiarata "NAME"
//Cannot redeclare block-scoped variable 'NAME'.ts(2451)
//let NAME: any




/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
x -= 4;
console.log("La sottrazione x - 4: " + x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */

let name1 = "john";
let name2 = "John";
let name3 = name2.toLowerCase();

console.log("Comparazione Uguaglianza (==): " name1 == name2);
console.log("Comparazione Uguaglianza (===): " name1 === name2);
console.log("Comparazione Uguaglianza (Lowercase): " name1 === name3);