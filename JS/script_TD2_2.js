//2.1

var mesnotes = [];
    notesaisie = 0;
var matieres = {};

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
//fonction qui calcule la note minimale
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

//fonction qui calcule la note maximale
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

//fonction qui calcule la moyenne
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




var matieres2 = {
    'maths': mesnotes,
    'science': 12
};

alert(matieres2.maths);
