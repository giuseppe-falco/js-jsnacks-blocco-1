// parola più lunga

// richiesta prima parola
var word1 = prompt("inserisci una parola");
// richiesta seconda parola
var word2 = prompt("inserisci un'altra parola");

console.log("parola 1 " + word1 + " parola 2 " + word2);
document.getElementById("word-1").innerHTML = word1;
document.getElementById('word-2').innerHTML = word2;

// controllo parola più lunga
if (word1.length > word2.length){
  document.getElementById('word-long').innerHTML = word1
  document.getElementById('word-short').innerHTML = word2
}else{
  document.getElementById('word-short').innerHTML = word1
  document.getElementById('word-long').innerHTML = word2
}
