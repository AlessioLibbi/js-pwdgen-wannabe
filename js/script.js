//DOMANDA NOME
const username = prompt("Qual e il tuo nome?")
console.log(username, typeof username)
// DOMANDA COGNOME
const surname = prompt("Qual e il tuo cognome?")
console.log(surname, typeof surname)
//DOMANDA COLORE
const color = prompt("Qual e il tuo colore preferito?")
console.log(color, typeof surname)
//RISULTATO PASSWORD
const password = `${username}${surname}${color}21`
console.log(password, typeof password)
document.getElementById("password").innerHTML = password