import { defineConfig } from "vitepress";
import sidebar from "./sidebar";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/IA-Cours/",
  title: "IA-Cours",
  description: "",
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
  },
});
