// PRIMA PARTE
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
// SECONDA PARTE
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// PRIMA PARTE 

// seleziono elementi di input 



// creo un array vuoto dove mi inserirà i 5 numeri estrapolati casualmente

let numeriGenerati = [];

for (let i = 0; i < 5; i++){

   let numeriRandom = Math.floor(Math.random()* 50) + 1;
   
   if(numeriGenerati.includes(numeriRandom)){
      i--;
   } else {
      numeriGenerati.push(numeriRandom);
   }
};

console.log(numeriGenerati);










// creo funzione asincrona (setInterval) per far partire il timer di 30 secondi


   // terminato il tempo appaiono i 5 input dove l'utente inserirà i numeri
