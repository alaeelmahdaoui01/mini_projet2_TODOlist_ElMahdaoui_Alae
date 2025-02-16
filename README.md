# Mini Projet : TODO list 


# Description

Ce projet est un quiz interactif développé en HTML, CSS et JavaScript. Il inclut un système de score, un chronomètre et un mécanisme de validation des réponses.

# Contenu du projet

index.html : Structure principale du quiz, styles CSS (intégrés directement dans le fichier HTML) et le script JS (integré aussi dans le fichier HTML) pour l'experience quiz-utilisateur. 

# Fonctionnalités

- Affichage d'un quiz à choix multiples.<br>
- Chronomètre de 50 secondes.<br>
- Score en temps réel basé sur les réponses correctes.<br>
- Validation des réponses avec désactivation des options après soumission.<br>
- Défilement automatique vers le haut après la soumission.

# Explication du Code

1. Chronomètre

Le chronomètre commence à 50 secondes et diminue chaque seconde.

Lorsqu'il atteint 0, le quiz se bloque et un message d'alerte s'affiche.

2. Système de Score

Chaque question a un attribut correctAnswer.

Lors de la soumission, le script compare les réponses choisies avec celles correctes et met à jour le score.

3. Validation du Quiz

Après soumission, le score est mis à jour et toutes les options sont désactivées pour éviter des modifications.

La page remonte automatiquement après validation.


# Exécution

- Ouvrir le projet dans GitHub Codespaces : 

Depuis GitHub, clique sur Code > Codespaces > Create codespace on main.

- Installer l'extension "Live Preview" dans VS Code.

- Ouvrir index.html et clique sur l'icône de prévisualisation.

- Vous pouvez copier le lien et ouvrir sur un nouveau browser. 



# Amélioration possibles

Ajout d'un système de correction qui affiche les bonnes réponses après soumission.