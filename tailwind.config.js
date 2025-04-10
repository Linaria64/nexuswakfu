/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'wakfu-primary': {
          DEFAULT: '#3B82F6',
          dark: '#2563EB'
        },
        'wakfu-secondary': {
          DEFAULT: '#8B5CF6',
          dark: '#7C3AED'
        },
        'gray': {
          '950': '#0B0F19',
          '900': '#111827',
          '800': '#1F2937',
          '700': '#374151'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
} 