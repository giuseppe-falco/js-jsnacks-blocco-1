// Inserisci un numero da sommare ad un numero generato casualmente


// genero numero casuale
var randomNumber = Math.round(Math.random()*100);
document.getElementById("random").innerHTML = randomNumber

// inserisci numero
var number = prompt("inserisci un numero");
while (isNaN  (number) || (number == "") || (number == " ")){
number = prompt("Ops, hai sbagliato qualcosa! Riprova");
}
number = Math.round(parseInt(number))
document.getElementById("number").innerHTML = number

//somma
var somma = randomNumber + number
document.getElementById("somma").innerHTML = somma
