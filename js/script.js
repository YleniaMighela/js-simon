// PRIMA PARTE
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi. Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l’utente deve inserire i numeri che ha visto precedentemente, nell’ordine che preferisce.
// SECONDA PARTE
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.




// seleziono elementi da prendere nell'HTML
const listaNumeri = document.getElementById('numbers-list');

const countdownDisplay = document.getElementById('countdown');

const formDisplay = document.getElementById ('answers-form');

const numInput = document.querySelectorAll ('input');



// PRIMA PARTE 
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

// inizializzo i secondi

let second = 5;

// funzione asincrona

const countdown = setInterval (() => {
   
   // Se i secondi sono uguali a 0 allora ferma il countdown
   
   if (second === 0) {
      clearInterval (countdown);
      
      // quando i secondi sono arrivati a 0 aggiungi una classe che nasconde i numeri
      
      listaNumeri.classList.add("d-none");
      
      // una volta nascosti i numeri tirami fuori il form con gli input cancellando la classe display none
      
      formDisplay.classList.remove("d-none");
      
   }
   
   // Altrimenti decrementa di uno fino e aggiornalo continuamente nell'HTML (innerHTML)
   else{
      countdownDisplay.innerHTML = --second;
   }
},1000);



// SECONDA PARTE


// creo una array vuoto, dove verrà aggiornato e aggiunto il valore(numero) inserito dall'utente nell'input
let userArray = []; 


// creo un evento in cui una volta che l'utente ha inserito i numeri il software dice quanti e quali dei numeri da indovinare sono stati individuati.

formDisplay.addEventListener ('submit', (event) =>{
   
   // blocco l'aggiornamento
   event.preventDefault();
   
   // creo un ciclo for 
   for (let i = 0; i < numInput.length; i++){
      
      // dove aggiunge in singolo elemento (iesimo) all'interno dell'array
      
      userArray.push(numInput[i].value);
   }
   
});
console.log(userArray);
