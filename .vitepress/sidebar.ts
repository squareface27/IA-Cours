export default [
  {
    collapsed: true,
    text: "Introduction",
    items: [
      { text: "Préambule", link: "/Introduction/Préambule/index.md" },
      {
        text: "Applications",
        collapsed: true,
        items: [
          {
            text: "Application 1 - Les voitures autonomes",
            link: "/Introduction/Applications/application1.md",
          },
          {
            text: "Application 2 - Recommandation de contenu",
            link: "/Introduction/Applications/application2.md",
          },
          {
            text: "Application 3 - Traitement de l’image et de la vidéo",
            link: "/Introduction/Applications/application3.md",
          },
        ],
      },
      { text: "IA ou pas IA ?", link: "/Introduction/IA-ou-pas-IA/index.md" },
      {
        text: "Les sous-domaines de l'IA",
        link: "/Introduction/Sous-Domaines/index.md",
      },
    ],
  },
  {
    collapsed: true,
    text: "Machine Learning",
    items: [{}],
  },
  {
    collapsed: true,
    text: "Réseau de neurones",
    items: [{}],
  },
  {
    collapsed: true,
    text: "Deep Learning",
    items: [{}],
  },
  {
    collapsed: true,
    text: "Programmation",
    items: [
      {
        collapsed: true,
        text: "Python",
        items: [
          {
            collapsed: true,
            text: "Guide",
            items: [
              {
                text: "Installation",
                link: "/Programmation/Python/Guide/installation.md",
              },
              {
                text: "Structure",
                link: "/Programmation/Python/Guide/structure.md",
              },
              {
                text: "Variables",
                link: "/Programmation/Python/Guide/variables.md",
              },
              {
                text: "Opérateurs",
                link: "/Programmation/Python/Guide/opérateurs.md",
              },
              {
                text: "Conditions",
                link: "/Programmation/Python/Guide/conditions.md",
              },
              {
                text: "Boucles",
                link: "/Programmation/Python/Guide/boucles.md",
              },
              {
                text: "Fonctions",
                link: "/Programmation/Python/Guide/fonctions.md",
              },
              {
                text: "Listes",
                link: "/Programmation/Python/Guide/listes.md",
              },
              {
                text: "Dictionnaires",
                link: "/Programmation/Python/Guide/dictionnaires.md",
              },
            ],
          },
          {
            collapsed: true,
            text: "Librairies",
            items: [{}],
          },
          {
            collapsed: true,
            text: "Ressources",
            items: [
              {
                text: "Cheat Sheets",
                link: "/Programmation/Python/Ressources/cheatsheets.md",
              },
            ],
          },
        ],
      },
      {
        collapsed: true,
        text: "R",
        items: [
          {
            collapsed: true,
            text: "Guide",
            items: [{
              items: [{
                text: "Type de données",
                link: "/Programmation/R/Guide/type-de-donnees.md",
              }]
            }],
          },
          {
            collapsed: true,
            text: "Ressources",
            items: [
              {
                text: "Cheat Sheets",
                link: "/Programmation/R/Ressources/cheatsheets.md",
              },
            ]
          }
        ],
      },
    ],
  },
];
