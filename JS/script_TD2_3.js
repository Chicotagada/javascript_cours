var mesnotes = [];
    notesaisie = 0;
    proceedmatiere = true;
    proceednote = true;
    matieresaisie = 0;
var matieres = {};

while (proceedmatiere == true) {
  matieresaisie = prompt('Veuillez saisir une matière :');
  proceednote = true;

  if (matieresaisie) {
    while (proceednote == true) {
      notesaisie = parseInt(prompt('Veuillez saisir une note :'));

      if (notesaisie && notesaisie >= 0 && notesaisie <= 20) {
        mesnotes.push(notesaisie);
      }
      else {
        proceednote = false;
        matieres[matieresaisie] = mesnotes;
        mesnotes = [];
      }
    }
  }
  else {
    proceedmatiere = false;
  }
}

console.log(matieres);
