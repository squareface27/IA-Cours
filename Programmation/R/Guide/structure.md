Vecteur : Suite de données de même type

``c()``

arguments concaténés par des virgules (,)

ex : c(1,2,3)


Matrice : Tableau à deux dimensions de données de même type

``matrix(données, nblignes, nbcolonnes, typeremplissage)``

ex : matrix(1:12, nrow=4, ncol=3, byrow=TRUE)


Array : Tableau à plus de deux dimensions avec des données de même type

``array(données, c(nblignes, nbcolonnes, nbexemplaire))``

ex : array(1:36, c(3,2,3))


Dataframe : tableau individus x variables

Un vecteur par variable

``data.frame(Taille=c(150,172), Age=c(15,27), Genre=c("F", "M"), row.names=c("Valérie", "Antoine"))``

|                   | Taille    | Age   |  Genre  |
| :---------------- | :------:  | ----: | ----:   |
| Valérie           |   150     | 15    |    F    |
| Antoine           |   172     | 27    |    M    |