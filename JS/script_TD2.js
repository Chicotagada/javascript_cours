//Cours de Sébastien Chauvel - DUT MMI - UCP - TD 2
var nbrnotessouhaitees = 3
    affichage = '';

//1.1
var mesnotes = [3, 5, 10, 15, 16];
var mesnotes2 = [9, 10, 15, 13];

//1.2
console.log(mesnotes[0], mesnotes[4]);

//1.3
//for (var compteur = 0; nbrnotessouhaitees != compteur ; compteur++) {
//    mesnotes.push(parseInt(prompt('Veuillez saisir une note :')));
//}

//1.4
affichage = mesnotes.join(',');

console.log(affichage);
console.log(mesnotes.length);

//1.5
var sum = 0;

function totalNotes(tableau){
  for (var compteur = 0; compteur < tableau.length; compteur++) {
    sum += tableau[compteur];
  }
  console.log('Le total de note est de ' +sum);
}

totalNotes(mesnotes);

//1.6
var NoteMax = 0;

function noteMax(tableau){
  for (var compteur = 0; compteur < tableau.length; compteur++) {
    if (NoteMax < tableau[compteur]) {
      NoteMax = tableau[compteur]
    } else {

    }
  }
  console.log('La note max est ' +NoteMax);
}

noteMax(mesnotes);

//1.7

var Noteminimale = 20;

function noteMin(tableau){
  for (var compteur = 0; compteur < tableau.length; compteur++) {
    if (Noteminimale > tableau[compteur]) {
      Noteminimale = tableau[compteur]
    } else {

    }
  }
  console.log('La note min est ' +Noteminimale);
}

noteMin(mesnotes);

//1.8

var moyenne = 0;
var totalnoteadditionnees = 0;

function average(tableau){
  for (var compteur = 0; compteur < tableau.length; compteur++) {
    totalnoteadditionnees += tableau[compteur];
  }
  moyenne = totalnoteadditionnees / tableau.length;

  console.log('La moyenne est de ' +moyenne);
}

average(mesnotes);
