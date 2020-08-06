//genera un numero casuale e poi stampalo se è pari nel box rosso altrimenti in nel box verde

// genero numero casuale
var randomNumber = Math.round(Math.random()*100);
document.getElementById("random").innerHTML = randomNumber
console.log(randomNumber);

number = randomNumber%2;
console.log(number);
// controllo pari
if (number == 0){
  document.getElementById("pari").innerHTML = randomNumber;
} else {
  document.getElementById("dispari").innerHTML = randomNumber
}


var buttonGen = document.getElementById('button')
bottonGen.addEve
