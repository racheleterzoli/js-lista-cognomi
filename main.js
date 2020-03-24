
var inserisci;
inserisci = prompt ("inserisci il tuo cognome e lo inserirò in oridne alfabetico. Premi ok per continuare");
var cognomi = [inserisci , 'rossi', 'fattori', 'belli', 'baiocchi', 'uncini','bianchi'];
cognomi.sort();
document.getElementById('password').innerHTML = cognomi.sort();
