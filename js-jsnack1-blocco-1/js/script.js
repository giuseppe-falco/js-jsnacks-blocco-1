// numero maggiore
// inserisci primo numero con controllo
var number1 = prompt("inserisci primo numero");
if (isNaN  (number1) || (number1 == "") || (number1 == " ")){
number1 = prompt("Ops, hai sbagliato qualcosa! Riprova");
  if (isNaN  (number1) || (number1 == "") || (number1 == " ")){
  number1 = prompt("Ops, hai sbagliato qualcosa! Riprova");
  }
  if (isNaN  (number1) || (number1 == "") || (number1 == " ")){
  number1 = prompt("Ops, hai sbagliato qualcosa! Riprova");
  }
  if (isNaN  (number1) || (number1 == "") || (number1 == " ")){
  number1 = prompt("Ops, hai sbagliato qualcosa! Riprova");
  }
  if (isNaN  (number1) || (number1 == "") || (number1 == " ")){
  number1 = prompt("Ops, hai sbagliato qualcosa! Riprova");
  }
  if (isNaN  (number1) || (number1 == "") || (number1 == " ")){
  number1 = prompt("Ops, hai sbagliato qualcosa! Riprova");
  }
  if (isNaN  (number1) || (number1 == "") || (number1 == " ")){
    alert("Eh ma allora sei coglione se sbagli 5 volte ! ")
  }
}
number1 = Math.round(parseInt(number1))
console.log(number1);

// inserisci secondo numero con controllo
var number2 = prompt("inserisci secondo numero");
if (isNaN(number2) || (number2 == "") || (number2 == " ")){
number2 = prompt("Ops, hai sbagliato qualcosa! Riprova");
  if (isNaN  (number2) || (number2 == "") || (number2 == " ")){
  number2 = prompt("Ops, hai sbagliato qualcosa! Riprova");
  }
  if (isNaN  (number2) || (number2 == "") || (number2 == " ")){
  number2 = prompt("Ops, hai sbagliato qualcosa! Riprova");
  }
  if (isNaN  (number2) || (number2 == "") || (number2 == " ")){
  number2 = prompt("Ops, hai sbagliato qualcosa! Riprova");
  }
  if (isNaN  (number2) || (number2 == "") || (number2 == " ")){
  number2 = prompt("Ops, hai sbagliato qualcosa! Riprova");
  }
  if (isNaN  (number2) || (number2 == "") || (number2 == " ")){
  number2 = prompt("Ops, hai sbagliato qualcosa! Riprova");
  }
  if (isNaN  (number2) || (number2 == "") || (number2 == " ")){
    alert("Eh ma allora sei coglione se sbagli 5 volte ! ")
  }
}
number2 = Math.round(parseInt(number2))
console.log(number2);


// calcolo pari dispari
if (number1 < number2){
  alert(number2 + " è maggiore del primo numero ");
} else if (number1 == number2) {
  alert("i numeri sono uguali");
} else {
  alert(number1 + " è maggiore del secondo numero ");
}
