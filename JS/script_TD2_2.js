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

function noteMin(tableau){
  var Noteminimale = 20;
  for (var compteur = 0; compteur < tableau.length; compteur++) {
    if (Noteminimale > tableau[compteur]) {
      Noteminimale = tableau[compteur]
    } else {

    }
  }
  console.log('La note minimale est ' +Noteminimale);
}

noteMin(mesnotes);

function noteMax(tableau){
  var NoteMax = 0;
  for (var compteur = 0; compteur < tableau.length; compteur++) {
    if (NoteMax < tableau[compteur]) {
      NoteMax = tableau[compteur]
    } else {

    }
  }
  console.log('La note maximale est ' +NoteMax);
}

noteMax(mesnotes);

function average(tableau){
  var moyenne = 0;
  var totalnoteadditionnees = 0;
  for (var compteur = 0; compteur < tableau.length; compteur++) {
    totalnoteadditionnees += tableau[compteur];
  }
  moyenne = totalnoteadditionnees / tableau.length;

  console.log('La moyenne est de ' +moyenne);
}

average(mesnotes);

affichage = mesnotes.join(',');

console.log(affichage);
