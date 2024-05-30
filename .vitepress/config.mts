import { defineConfig } from "vitepress";
import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/IA-Cours/",
  lang: "fr-FR",
  title: "IA-Cours",
  description: "",
  lastUpdated: true,

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Accueil", link: "/" },
      { text: "Glossaire", link: "/Glossaire/index.md" },
    ],

    sidebar: sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/squareface27/IA-Cours" },
    ],

    lastUpdatedText: "Dernière mise à jour",
    editLink: {
      text: "Modifier cette page",
      pattern: "https://github.com/squareface27/IA-Cours/tree/master/:path",
    },
  },
});
