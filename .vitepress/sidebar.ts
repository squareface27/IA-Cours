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
            items: [{}],
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
        text: "R (prochainement)",
        items: [{}],
      },
    ],
  },
];
