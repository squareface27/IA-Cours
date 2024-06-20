## Types de données

numeric : nombres entiers ou décimaux

character : texte ou suite de caractères

logical : boléen (True ou False)

## Connaître le type d'une donnée :

- mode() => ex : mode(1.45) -> numeric
- is.numeric(1.45) => True
- is.character(1.45) => False

## Forcer le type :

as.character(1.45) => "1.45"