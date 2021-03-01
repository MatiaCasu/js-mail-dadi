//utente Email
var emailUtente = prompt("Inserisci la tua email");
// /utente Email

// lista Email
var lista = ["email1", "email2", "email3", "email4", "email5", "email6"];
// /lista Email

// Controllo email
for(var i = 0; i < lista.length; i++ ){
  if(emailUtente === lista[i]){
  alert("sei in lista!");
  emailUtente = 1;
  document.getElementById("lista").innerHTML  = lista;
  }
}
// /Controllo email

// Controllo non passato
if(emailUtente != 1){
  alert("non puoi accedere");
}
// /Controllo non passato
