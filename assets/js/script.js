// Attraverso l'apposita API di Boolean
// https://flynn.boolean.careers/exercises/api/random/mail
// generare 10 indirizzi email e stamparli in pagina all'interno di una lista.


//definizione di variabili 
const lista = document.getElementById('lista')

//adesso con il for ciclo la chiamata all'API 10 volte in modo da avere poi un li composta da 10 email


const mailApi = 'https://flynn.boolean.careers/exercises/api/random/mail';

const maiList = axios.get(mailApi).then((resp) => {})