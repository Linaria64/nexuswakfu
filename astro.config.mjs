import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [tailwind(), mdx()],
  image: {
    // Activation du service d'images intégré d'Astro
    service: {
      entrypoint: 'astro/assets/services/sharp'
    }
  },
  vite: {
    ssr: {
      noExternal: ['@astrojs/*']
    },
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      rollupOptions: {
        output: {
          manualChunks: {
            'wakfu-core': [
              './src/layouts/MainLayout.astro',
              './src/components/ui/Button.astro',
              './src/components/ui/Card.astro',
              './src/components/ui/SearchBar.astro'
            ]
          }
        }
      }
    }
  },
  markdown: {
    shikiConfig: {
      theme: 'dracula',
      wrap: true
    }
  },
  site: 'https://guide-wakfu.com',
  trailingSlash: 'never',
  build: {
    assets: '_assets',
    inlineStylesheets: 'auto'
  },
  compressHTML: true,
  output: 'static'
}); 