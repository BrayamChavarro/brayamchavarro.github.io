import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"
import robotsTxt from "astro-robots-txt"

const isProd = process.env.NODE_ENV === 'production'

export default defineConfig({
  integrations: [tailwind(), robotsTxt()],
  site: 'https://brayamchavarro.github.io/',
  base: '/', // <-- así está bien // Solo usa base en producción
  outDir: 'dist',
})

