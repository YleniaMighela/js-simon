// PRIMA PARTE
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
// SECONDA PARTE
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.


// PRIMA PARTE 

// seleziono elementi di input 
const listaNumeri = document.getElementById('numbers-list');







// creo un array vuoto dove mi inserirà i 5 numeri estrapolati casualmente

let numeriGenerati = [];

// creo un ciclo for 
for (let i = 0; i < 5; i++){
   
   // questo metodo mi permette di estrapolare i 50 numeri
   let numeriRandom = Math.floor(Math.random()* 50) + 1;
   
  
   // SE la variabile numeri Random include un numero generato già presente allora decrementa per rigenerarlo
   if(numeriGenerati.includes(numeriRandom)){
      i--;
   }
   // ALTRIMENTI se non è presente aggiungilo nell'array
   else {
      numeriGenerati.push(numeriRandom);
      
      // per far sì che la lista di numeri risulti all'interno dell'HTML,aggiungo il metodo per creare e aggangiare i 'li'


      //  aggiungo l'elemento "LI"" in nuona nuova variabile "lista"
      let nuovoElementoLista = document.createElement('li');
      
      // ogni singolo elemento all'interno dell'array verrà associato ad un numero generato ed il contenuto sarà inserito nell'HTML
      nuovoElementoLista.innerHTML = (numeriGenerati[i]);
      
      // mi permette di aggiungere l'elemento nel DOM
      listaNumeri.appendChild(nuovoElementoLista);
   }
   
   
};

console.log(numeriGenerati);










// creo funzione asincrona (setInterval) per far partire il timer di 30 secondi


// terminato il tempo appaiono i 5 input dove l'utente inserirà i numeri
