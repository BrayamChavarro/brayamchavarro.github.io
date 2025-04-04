import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://brayamchavarro.github.io/', // Cambia esto a tu URL de GitHub Pages
  base: '/brayamchavarro.github.io/', // Asegúrate de usar el nombre del repositorio
  outDir: 'dist', // Directorio de salida para la construcción
})

