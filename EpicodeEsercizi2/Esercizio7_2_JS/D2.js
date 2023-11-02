/* ESERCIZIO 1
 Scrivi un algoritmo per trovare il più grande tra due numeri interi.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let a = prompt("Inserisci il numero A: ");
let b = prompt("Inserisci il numero B: ");

if (a > b) {
  console.log(a + " è maggiore di " + b);
} else if (a < b) {
  console.log(a + " è minore di " + b)
}*/



/* ESERCIZIO 2
  Scrivi un algoritmo che mostri "not equal" in console se un numero intero fornito è diverso da 5.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let a1 = prompt("Inserisci il numero 5 o un numero diverso:");

if (a1 != 5) {
  console.log("Not Equal");
} else {
  console.log("Bravo, hai vinto un premio. Dirigiti su discord per ottenerlo!")
}*/

/* ESERCIZIO 3
  Scrivi un algoritmo che mostri "divisibile per 5" in console se un numero fornito è perfettamente divisibile per 5 (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let a3 = prompt("Inserisci il primo numero per sapere se è divisibile per 5: ");
let b3 = 5;
let c = a3 % b3;

if (c==0){
  console.log("Il numero è divisibile per 5");
} else {
  console.log("Il numero non è divisibile per 5")
} */

/* ESERCIZIO 4
  Scrivi un algoritmo per verificare che, dati due numeri interi, il valore di uno di essi sia 8 oppure se la loro addizione/sottrazione sia uguale a 8.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let x = prompt("Inserisci il primo numero:");
let y = prompt("Inserisci il secondo numero: ");
let z= number(x+y);
let g = x-y;

if (x == 8) {
  console.log("Il primo numero è uguale a 8");
}
if (y == 8){
  console.log("Il secondo numero è uguale a 8");
}

if (z == 8){
  console.log("L addizione è uguale a 8");
}

if (g == 8){
  console.log("La sottrazione è uguale a 8");
} else {
  console.log("Il risultato della sottrazione è: "+g);
}*/

/* ESERCIZIO 5
  Stai lavorando su un sito di e-commerce. Stai salvando il saldo totale del carrello dell'utente in una variabile "totalShoppingCart".
  C'è una promozione in corso: se il totale del carrello supera 50, l'utente ha diritto alla spedizione gratuita (altrimenti la spedizione ha un costo fisso pari a 10).
  Crea un algoritmo che determini l'ammontare totale che deve essere addebitato all'utente per il checkout.
*/

/*let prod1 = Number(prompt("Qual è il costo del primo prodotto?"));
let prod2 = Number(prompt("Qual è il costo del secondo prodotto?"));
let prod3 = Number(prompt("Qual è il costo del terzo prodotto?"));
let totalShoppingCart = Number(prod1 + prod2 + prod3);
let totalAmmountCart = Number(totalShoppingCart + 10);

if(totalShoppingCart>50){
  console.log("La spesa per te è gratuita!");
  console.log("Il costo totale è di: ", totalShoppingCart);
} else {
  console.log("La spesa è a pagamento (il totale è compreso di spedizione)");
  console.log("Il costo totale è di: ", totalAmmountCart);
}*/


/* ESERCIZIO 6
  Stai lavorando su un sito di e-commerce. Oggi è il Black Friday e viene applicato il 20% su ogni prodotto.
  Modifica la risposta precedente includendo questa nuova promozione nell'algoritmo, determinando come prima se le spedizioni sono gratuite oppure no e e calcolando il totale.
*/

/*let prod1 = Number(prompt("Qual è il costo del primo prodotto?"));
let prod2 = Number(prompt("Qual è il costo del secondo prodotto?"));
let prod3 = Number(prompt("Qual è il costo del terzo prodotto?"));
let totalShoppingCart = prod1 + prod2 + prod3;
let totalBlackFriday = totalShoppingCart/100*20;
let totalAmmountCart = Number(totalShoppingCart + 10);

if(totalShoppingCart>50){
  console.log("La spesa per te è gratuita!");
  console.log("Il costo totale è di: ", totalShoppingCart);
  console.log("La spesa con il blackfriday è: ",totalShoppingCart - totalBlackFriday);
} else {
  console.log("La spesa è a pagamento (il totale è compreso di spedizione)");
  console.log("Il costo totale è di: ", totalAmmountCart);
  console.log("Il costo totale nel black friday è: ", totalAmmountCart - totalBlackFriday);
}*/



/* ESERCIZIO 7
  Crea tre variabili, e assegna un valore numerico a ciascuna di esse.
  Utilizzando un blocco condizionale, crea un algoritmo per ordinarle secondo il loro valore, dal più alto al più basso.
  Alla fine mostra il risultato in console.
*/

/*let valore1 = Number(prompt("Scegli il primo valore"));
let valore2 = Number(prompt("Scegli il secondo valore"));
let valore3 = Number(prompt("Scegli il terzo valore"));
let array = [valore1, valore2, valore3];
array.sort();
console.log(array);
*/

/* ESERCIZIO 8
  Crea un algoritmo per verificare che un valore fornito sia un numero oppure no (suggerimento: cerca su un motore di ricerca "typeof").
*/

/*let a = prompt("Inserisci un numero o una parola");

if(isNaN(+a)){
  console.log("Non è un numero, ma una parola");
} else {
  console.log("E' un numero");
}*/

/* ESERCIZIO 9
  Crea un algoritmo per controllare se un numero fornito sia pari o dispari (suggerimento: cerca l'operatore modulo su un motore di ricerca)
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
  Modifica la logica del seguente algoritmo in modo che mostri in console il messaggio corretto in ogni circostanza.
  let val = 7
  if (val < 10) {
      console.log("Meno di 10");
    } else if (val < 5) {
      console.log("Meno di 5");
    } else {
      console.log("Uguale a 10 o maggiore");
    }
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 11
  Fornito il seguente oggetto, scrivi del codice per aggiungere una proprietà "city", il cui valore sarà "Toronto".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  city: 'Toronto',
  skills: ['javascript', 'html', 'css'],
}*/

/*me.city = 'Toronto'  // Aggiunge la proprietà city con valore Toronto all'oggetto me
console.log(me) */



/* ESERCIZIO 12
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere la proprietà "lastName".
*/

/* const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'  // Aggiunge la proprietà city con valore Toronto all'oggetto me
console.log(me)

delete me.lastName
console.log(me); */

/* ESERCIZIO 13
  Lavorando sempre sull'oggetto precedentemente fornito, scrivi del codice per rimuovere l'ultimo elemento della proprietà "skills".
*/

/*const me = {
  name: 'John',
  lastName: 'Doe',
  skills: ['javascript', 'html', 'css'],
}

me.city = 'Toronto'  // Aggiunge la proprietà city con valore Toronto all'oggetto me
console.log(me)

delete me.lastName
console.log(me);

me.skills.pop();
console.log("L'elemento eliminato dall'array è ") //Come si ritorna il valore eliminato dell'array????
console.log(me.skills) */


/* ESERCIZIO 14
  Scrivi del codice per creare un array inizialmente vuoto. Riempilo successivamente con i numeri da 1 a 10.
*/

  /* let arr1 = []

arr1.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(arr1) */

/* ESERCIZIO 15
  Scrivi del codice per sostituire l'ultimo elemento dell'array, ovvero il valore 10, con il valore 100.
*/

 /* let arr1 = []

arr1.push(1, 2, 3, 4, 5, 6, 7, 8, 9, 10)
console.log(arr1)

arr1.splice(9, 1, 100)
console.log("Il nuovo array è " + arr1) */


/* let a = 18;
let b = 12;
let c = 8;

if (a>b) 
  if (a>c) 
    console.log("il numero maggiore è " + a); 
   else console.log("il numero maggiore è " + c); 
    else if (b>c) 
      console.log("il numero maggiore è " + b)
        else  console.log("il numero maggiore è " + c);  */

