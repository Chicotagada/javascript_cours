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
