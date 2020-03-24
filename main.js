var check;
var inserisci, itemN, i, contenutoPrecedente;
inserisci = prompt ("inserisci il tuo cognome e lo inserirò in oridne alfabetico. Premi ok per continuare");
var cognomi = [inserisci , 'rossi', 'fattori', 'belli', 'baiocchi', 'uncini','bianchi'];
cognomi.sort();
document.getElementById('password').innerHTML = cognomi.sort();



for (var i = 0; i < cognomi.length; i++){


  if (cognomi[i] == inserisci) {
    document.getElementById('password').innerHTML = inserisci + " è al " + (i+1) + " posto nella seguente lista:";
  }

}
for (var i = 0; i < cognomi.length; i++){
  itemN = cognomi[i];
  contenutoPrecedente = document.getElementById('password').innerHTML;
  document.getElementById('password').innerHTML = contenutoPrecedente + "<li>" + itemN + "</li>"

}
