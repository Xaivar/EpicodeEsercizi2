/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let l1;
let l2;

function area(l1, l2){
    let area1 = l1*l2
    console.log("Questa è l'area: "+area1);
}

area(6,8);*/


/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let p1, p2;

function crazySum(p1,p2){
    let somma = p1+p2;
        if(p1==p2){
            console.log("La Somma totale (Moltiplicata per 3 poiché entrambi i numeri sono uguali): "+somma*3);
        } else {
            console.log("La Somma Totale è: "+somma);
        }

}

crazySum(6,5);*/

/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let p1;
const p2=19;

function crazyDiff(p1,p2){
    let diff=p1-p2;
        if(p1>p2){
            console.log("Questa è la differenza moltiplicata per 3: "+diff*3);
        } else {
            console.log("Questa è la differenza: "+diff);
        }
}

crazyDiff(4,p2);*/

/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let n;

function boundary(n){
    if (n >=20 && n<=100 || n == 400){
        console.log("Questo numero è compreso tra 20 e 100, oppure è 400 ->"+n);
    } else {
        console.log("Questo numero non è compreso tra 20 e 100, né è 400 ->"+n);
    }
}

boundary(54);*/

/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let stringa;

function epify(stringa) {
    if (stringa.startsWith("EPICODE")) {
      return stringa;
    } else {
      return "EPICODE " + stringa;
    }
  }
  
  // Esempi di utilizzo:
console.log(epify("EPICODE è un'azienda!")); 
console.log(epify("STORIES ENTERPRISE")); */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/*let n;

function check3and7 (n){
    if(n % 3 == 0){
        console.log("Il numero è multiplo di 3");
    } else if(n % 7 == 0){
        console.log("Il numero è multiplo di 7")
    } else {
        console.log("Il numero non è un intero")
    }
}

check3and7(4);*/



/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/*let stringa;
function reverseString(stringa) {
    return stringa.split('').reverse().join('');
}
console.log(reverseString("Ciao come stai?"));*/

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/*function upperFirst(inputString) {
    // Dividi la stringa in un array di parole
    let words = inputString.split(' ');

    // Itera attraverso ogni parola nell'array
    for (let i = 0; i < words.length; i++) {
        // Rendi maiuscola la prima lettera di ogni parola
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }

    // Unisci le parole nell'array in una nuova stringa separandole con uno spazio
    let resultString = words.join(' ');

    return resultString;
}

// Esempio di utilizzo della funzione
let inputString = "questa è una prova";
let outputString = upperFirst(inputString);
console.log(outputString);*/

/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/*function cutString(stringa) {
    // Verifica se la stringa ha almeno 2 caratteri
    if (stringa.length < 2) {
        return "La stringa deve contenere almeno 2 caratteri.";
    }

    // Restituisci una nuova stringa senza il primo e l'ultimo carattere
    return stringa.slice(1, -1);
}

// Esempio di utilizzo della funzione
let stringa = "Hello, World!";
let stringaRisultato= cutString(stringa);
console.log(stringaRisultato);*/

/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* function giveMeRandom(n) {
    let numeriCasuali = [];

    for (let i = 0; i < n; i++) {
        // Genera un numero casuale compreso tra 0 e 10
        let numeriCasuali = Math.floor(Math.random() * 11);
        numeriCasuali.push(numeriCasuali);
    }

    return numeriCasuali;
}

// Esempio di utilizzo della funzione per ottenere un array di 5 numeri casuali
let n = 5;
let randomArray = giveMeRandom(n);
console.log(randomArray);*/
