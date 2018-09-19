//Cours de Sébastien Chauvel - DUT MMI - UCP - TD 2
var nbrnotessouhaitees = 3
    affichage = '';

//1.1
var mesnotes = [0, 5, 10, 15, 20];

//1.2
console.log(mesnotes[0], mesnotes[4]);

//1.3
for (var compteur = 0; nbrnotessouhaitees != compteur ; compteur++) {
    mesnotes.push(notesaisie = parseInt(prompt('Veuillez saisir une note :')));
}

//1.4
affichage = mesnotes.join(',');

console.log(affichage);
console.log(mesnotes.length);

//1.5
function totalNotes(){
  for (var compteur = 0; compteur < mesnotes.length; compteur++) {
    array[i]
  }
}
