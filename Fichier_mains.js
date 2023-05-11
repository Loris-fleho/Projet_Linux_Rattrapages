// Liste des questions possibles
var questions = [
    "Quelle est la commande pour aller dans le répertoire racine ?",
    "Quelle est la commande pour afficher le contenu du répertoire courant ?",
    "quelle est la commande pour vérifier votre position actuelle ?",
    "Quelle est la commande pour créer un répertoire nommé test ?",
    "Quelle est la commande pour accéder au répertoire d'accueil général ?",
    "Quelle est la commande pour accéder à votre répertoire personnel ?",
    "Quelle est la commande pour revenir au répertoire d'avant (juste au dessus) ?",
    "Quelle est la commande pour créer un fichier texte vide nommé last_name_first_name.tkt ?",
    "Quelle est la commande pour exécuter un fichier texte ?",
    "Quelle est la commande pour quitter un fichier texte ?",
    "Quelle est la commande pour se donner soi-même l'autorisation ?",
    "Quelle est la commande pour supprimer le fichier test ?",
    "Quelle est la commande pour mettre à jour votre gestionnaire de paquets principal nommé apt ?",
    "Quelle est la commande pour mettre à niveau votre gestionnaire de paquets principal nommé apt ?",
    "Quelle est la commande pour installer le package cmatrix ?",
    "Quelle est la commande pour lancer le package nouvellement installé cmatrix ?",
    "Quelle est la commande pour quitter un package nouvellement installé puis lancé ?",
    "Quelle est la commande pour dire Hello_Session_0 en utilisant bash ?",
    "Quelle est la commande pour afficher la fonction d'aide cmatrix ?",
    "Comment afficher les 5 premières lignes d'un fichier en ligne de commande ?"
];
console.log(questions);


// Liste des réponses aux questions
var correctAnswers = [
    "cd /",
    "ls",
    "pwd",
    "mkdir test",
    "cd home/",
    "cd ~",
    "cd ..",
    "touch last_name_first_name.txt",
    "contrôle+o",
    "contrôle+x",
    "sudo",
    "rm test",
    "sudo apt update",
    "sudo apt upgrade",
    "sudo apt install cmatrix",
    "cmatrix",
    "q",
    "echo Hello_Session_0",
    "cmatrix --help",
    "head -n 5 file.txt"
];
console.log(correctAnswers);


// Fonction pour choisir une question aléatoire
function getRandomQuestion() {
    var randomIndex = Math.floor(Math.random() * questions.length);
    var question = questions[randomIndex];
    document.getElementById("question").textContent = question;
}

// Fonction pour évaluer la réponse donnée
function evaluateAnswer() {
    var answer = document.getElementById("answer").value.toLowerCase();
    var question = document.getElementById("question").textContent.toLowerCase();
    var index = questions.findIndex(q => q.toLowerCase() === question.toLowerCase()); // Récupérer l'index de la question affichée

    if (index < 0) {
        console.error("L'index de la question n'a pas été trouvé dans le tableau des questions !");
        return; // Sortir de la fonction
    }

    var correctAnswer = correctAnswers[index]; // Récupérer la réponse correcte correspondante

    console.log("answer = " + answer);
    console.log("question = " + question);
    console.log("index = " + index);
    console.log("correctAnswer = " + correctAnswer);

    if (answer === correctAnswer) {
        document.getElementById("result").textContent = "Bonne réponse !";
    } else {
        document.getElementById("result").textContent = "Mauvaise réponse...";
    }
}
