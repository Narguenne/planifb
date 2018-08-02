//2018
var etude_sup = 0;
var rob = 0;
var lego = 0;
var livres = 0;
var autres = 0;
var pf = 0;
var sport = 0;
var montant;


//Soustraire_montant
var etude_sup2 = 0;
var rob2 = 0;
var lego2 = 0;
var livres2 = 0;
var autres2 = 0;
var pf2 = 0;
var sport2 = 0;

//2018
function montantpos(){
	montant = prompt('Quel est le montant à soumettre ?');
	etude_sup = etude_sup + montant * 0.35;
	document.getElementById('etude_sup').innerHTML = 'Études supérieures:' + ' ' + etude_sup + '$';

	rob = rob + montant * 0.15;
	document.getElementById('rob').innerHTML = 'Robotique:' + ' ' + rob + '$';

	lego = lego + montant * 0.10;
	document.getElementById('lego').innerHTML = 'Lego:' + ' ' + lego + '$';

	livres = livres + montant * 0.10;
	document.getElementById('livres').innerHTML = 'Livres:' + ' ' + livres + '$';

	autres = autres + montant * 0.05;
	document.getElementById('autres').innerHTML = 'Autres:' + ' ' + autres + '$';

	pf = pf + montant * 0.05;
	document.getElementById('pf').innerHTML = 'Projets futurs:' + ' ' + pf + '$';

	sport = sport + montant * 0.20;
	document.getElementById('sports').innerHTML = '	Sports:' + ' ' + sport + '$';
}

//Soustraire_montant
function appliquer(){
 
  etude_sup2 = document.getElementById('etude_sup2');
  etude_sup = etude_sup - etude_sup2;
  document.getElementById('etude_sup').innerHTML = 'Études supérieures:' + ' ' + etude_sup + '$';
}