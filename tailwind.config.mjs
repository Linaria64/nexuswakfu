/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        wakfu: {
          primary: '#3498db',    // Bleu Wakfu
          secondary: '#f39c12',  // Orange Wakfu
          accent: '#27ae60',     // Vert Wakfu
          dark: '#2c3e50',       // Fond sombre
          light: '#ecf0f1',      // Fond clair
        },
        classes: {
          iop: '#ff5252',
          cra: '#4caf50',
          eni: '#ff9800',
          // Ajouter toutes les couleurs des classes
        }
      },
      fontFamily: {
        wakfu: ['Wakfu', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      backgroundImage: {
        'hero-pattern': "url('/images/heroes/wakfu-hero.jpg')",
        'texture': "url('/images/ui/texture.png')",
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            'code::before': {
              content: '""'
            },
            'code::after': {
              content: '""'
            },
          }
        }
      })
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    forms(),
  ],
} 