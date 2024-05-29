# Guide d'installation de Python

## Introduction

Python est un langage de programmation puissant et polyvalent utilisé dans divers domaines, de la science des données au développement web. Ce guide vous aidera à installer Python sur les systèmes d'exploitation Windows, macOS et Linux.

---

## Installation de Python sur Windows

### Étape 1 : Télécharger l'installateur

1. Allez sur le site officiel de Python : [python.org](https://www.python.org/).
2. Cliquez sur "Downloads" dans le menu principal.
3. Sélectionnez "Download Python 3.x.x" (la version la plus récente).

### Étape 2 : Exécuter l'installateur

1. Ouvrez le fichier téléchargé (généralement nommé `python-3.x.x.exe`).
2. **Important :** Cochez la case "Add Python to PATH".
3. Cliquez sur "Install Now" pour commencer l'installation.
4. Une fois l'installation terminée, cliquez sur "Close".

### Étape 3 : Vérifier l'installation

1. Ouvrez l'invite de commandes (Cmd).
2. Tapez `python --version` et appuyez sur Entrée.
   - Vous devriez voir la version de Python installée.
3. Tapez `pip --version` pour vérifier l'installation de pip (gestionnaire de paquets Python).

---

## Installation de Python sur macOS

### Étape 1 : Télécharger l'installateur

1. Allez sur le site officiel de Python : [python.org](https://www.python.org/).
2. Cliquez sur "Downloads" dans le menu principal.
3. Sélectionnez "Download Python 3.x.x" pour macOS.

### Étape 2 : Exécuter l'installateur

1. Ouvrez le fichier téléchargé (généralement nommé `python-3.x.x-macosx.pkg`).
2. Suivez les instructions de l'assistant d'installation.
3. Cliquez sur "Continue" et acceptez les termes de la licence.
4. Cliquez sur "Install" pour commencer l'installation.

### Étape 3 : Vérifier l'installation

1. Ouvrez l'application "Terminal".
2. Tapez `python3 --version` et appuyez sur Entrée.
   - Vous devriez voir la version de Python installée.
3. Tapez `pip3 --version` pour vérifier l'installation de pip.

---

## Installation de Python sur Linux

### Étape 1 : Mettre à jour les paquets

1. Ouvrez votre terminal.
2. Mettez à jour la liste des paquets en utilisant :
   ```sh
   sudo apt update
   ```

### Étape 2 : Installer Python

1. Installez Python avec la commande suivante :
   ```sh
   sudo apt install python3
   ```
2. Installez pip avec la commande suivante :
   ```sh
   sudo apt install python3-pip
   ```

### Étape 3 : Vérifier l'installation

1. Tapez `python3 --version` dans le terminal et appuyez sur Entrée.
   - Vous devriez voir la version de Python installée.
2. Tapez `pip3 --version` pour vérifier l'installation de pip.
