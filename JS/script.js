//Cours de Sébastien Chauvel - DUT MMI - UCP

//#################################################################
//1_Créez votre premier code javascript

/*var result = 'Sebastien Chauvel';                     //déclare la variable
alert(result);*/                                        //affiche la valeur de la variable

//#################################################################
//2_Utilisez les fonctions natives de Javascript

/*var nom, prenom, age, result;
nom = prompt('Veuillez saisir votre nom');              //demande à l'user de saisir un texte
prenom = prompt('Veuillez saisir votre prénom');
age = prompt('Veuillez saisir votre age');

result = 'bonjour je m\'appelle ' + nom + ' ' + prenom + ' et j\'ai ' + age + ' ans';
                                                        //concaténation variables + strings
alert(result);*/

//#################################################################
//3_Tester vos variables et créez des conditions

/*var age = prompt('Veuillez saisir votre âge :');

if (age < 18) {                                         //condition if (si age plus petit que 18)

alert('Vous n\'avez pas l\'age requis');

}
else if (age > 18) {                                    //condition if else (sinon si age plus grand que 18)

alert('Bienvenue sur le site');
}
else {                                                  //condition else (sinon)
  alert('Avez-vous saisi un chiffre ?');
}*/

//#################################################################
//4_Utilisation des boucles

/*var proceed = true;

do {                                                  //Boucle do while
var age = prompt('Veuillez saisir votre âge :');
if (age < 18) {

alert('Vous n\'avez pas l\'age requis');

}
else if (age >= 18) {

alert('Bienvenue sur le site');
proceed = false;
}
else {
  alert('Avez-vous saisi un chiffre ?');
}
} while (proceed == true); // ou while (proceed);*/   //Tant que proceed est vrai, on boucle

//#################################################################
//4_Utilisation des boucles_2
/*
var proceed = true;
    nbrnotes = 0;
    notesadditionnees = 0;
    moyenne = 0;
    notemax = 0;
    notesaisie = 0;
var result;

do {
  notesaisie = parseInt(prompt('Veuillez saisir une note :'));

  if (notesaisie && notesaisie >= 0 && notesaisie <= 20) {
    nbrnotes++;
    notesadditionnees += notesaisie;

    if (notesaisie > notemax) {
      notemax = notesaisie;
    }
    else {
    }
  }
  else {
    proceed = false;
  }
} while (proceed == true);

moyenne = notesadditionnees / nbrnotes;

result = 'Moyenne :' +moyenne +' Note max : ' +notemax +' Nombre de notes : ' +nbrnotes;

console.log(result); //affiche les données directement dans la console
*/
//#################################################################

var proceed = true;
nbrnotes = 0;
notesadditionnees = 0;
moyenne = 0;
notemax = 0;
notesaisie = 0;
nbrnotessouhaitees = 0;
var result;

nbrnotessouhaitees = parseInt(prompt('Combien de notes souhaitez-vous saisir ?'));

for (var compteur = 0; nbrnotessouhaitees != compteur ; compteur++) {
  notesaisie = parseInt(prompt('Veuillez saisir une note :'));

  if (notesaisie && notesaisie >= 0 && notesaisie <= 20) {
    nbrnotes++;
    notesadditionnees += notesaisie;
 
    if (notesaisie > notemax) {
      notemax = notesaisie;
    }
    else {
    }
  }
  else {
    compteur = compteur -1;
    alert('Votre note est non correcte');
  }
}

moyenne = notesadditionnees / nbrnotes;

result = 'Moyenne :' +moyenne +' Note max : ' +notemax +' Nombre de notes : ' +nbrnotes;

console.log(result); //affiche les données directement dans la console
