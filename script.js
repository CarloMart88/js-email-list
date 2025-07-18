// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.

//definizione di variabili 
const lista = document.getElementById('lista')
const button = document.getElementById('button')

//adesso con il for ciclo la chiamata all'API 10 volte in modo da avere poi un li composta da 10 email


const Api = 'https://flynn.boolean.careers/exercises/api/random/mail'

const mailList = () => {
for(let i=0 ; i<10 ; i++)
axios.get(Api).then((risp) => {

  let mail = risp.data.response 

  lista.innerHTML += `<li class="list-group-item text-center">${mail}</li>`
  
})
}

mailList()

//Inserire un bottone che al click faccia il fetch altre 10 mail (sostituendo le altre)
//qui creo il bottone e avendo creato la funzione per il ciclo for mi basterà eliminare la lista con  lista.innerHTML = ''
// per poi riaggiornarla con la funzione 

button.addEventListener('click' , () => {
  
  console.log('bottone cliccato')
  lista.innerHTML = ''
  mailList()

} )



