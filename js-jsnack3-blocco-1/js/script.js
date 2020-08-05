// Inserisci un numero, se è pari stampa il numero, se è dispari stampa il numero successivo

// inserisci primo numero

var number = prompt("inserisci un numero");
if (isNaN  (number) || (number == "") || (number == " ")){
number = prompt("Ops, hai sbagliato qualcosa! Riprova");
  if (isNaN  (number) || (number == "") || (number == " ")){
  number = prompt("Ops, hai sbagliato qualcosa! Riprova");
  }
  if (isNaN  (number) || (number == "") || (number == " ")){
  number = prompt("Ops, hai sbagliato qualcosa! Riprova");
  }
  if (isNaN  (number) || (number == "") || (number == " ")){
  number = prompt("Ops, hai sbagliato qualcosa! Riprova");
  }
  if (isNaN  (number) || (number == "") || (number == " ")){
  number = prompt("Ops, hai sbagliato qualcosa! Riprova");
  }
  if (isNaN  (number) || (number == "") || (number == " ")){
    alert("Eh ma allora sei coglione se sbagli 5 volte ! ")
  }
}
number = Math.round(parseInt(number))
console.log(number);

// dichiarazione e calcolo resto
var test = number%2
console.log(test)

if (number%2 == 0){
  document.getElementById('number-html').innerHTML = (number + " il numero è pari")
} else {

  document.getElementById('number-html').innerHTML = (number + " il numero è dispari, questo è il numero pari successivo " + (number+1) )
}
