// Lancio Dado
var nomeUtente = prompt("Ciao! Digita il tuo nome!");
alert("Bene" + nomeUtente + "! Ora Lancia il dado!");
document.getElementById("nome_utente").innerHTML = nomeUtente;
// /Lancio Dado

// Numero Random Utente
var utente = Math.floor((Math.random() * 6) + 1 );
document.getElementById("utente_dado").innerHTML = utente;
// /Numero Random Utente

// Numero Random Avversario
var avversario = Math.floor((Math.random() * 6) + 1 );
document.getElementById("avversario_dado").innerHTML = avversario;
// /Numero Random Avversario

// Confronto Risultati
if (utente <= avversario){
  var reDo = "<h1>Riprova!</h1>";
  document.getElementById("risulato").innerHTML = reDo;
}
// /Confronto Risultati
