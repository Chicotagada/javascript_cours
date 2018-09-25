//2.1

var mesnotes = [];
    notesaisie = 0;

nbrnotessouhaitees = parseInt(prompt('Combien de notes souhaitez-vous saisir ?'));

for (var compteur = 0; nbrnotessouhaitees != compteur ; compteur++) {
  notesaisie = parseInt(prompt('Veuillez saisir une note :'));

  if (notesaisie && notesaisie >= 0 && notesaisie <= 20) {
    mesnotes.push(notesaisie);
  }
  else {
    compteur = compteur -1;
    alert('Votre note est non correcte');
  }
}

affichage = mesnotes.join(',');

console.log(affichage);
