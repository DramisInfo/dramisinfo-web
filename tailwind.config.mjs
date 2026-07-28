/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Laiton (accent) — boutons, liens, icônes
        brand: {
          50:  '#fbf3e1',
          100: '#f5e4b8',
          200: '#ebcb7c',
          300: '#deb852',
          400: '#c99a2e',
          500: '#ad8419',
          600: '#8a6a14',
          700: '#6b5210',
          800: '#4a390b',
          900: '#2e2307',
        },
        // Sable (neutre chaud) — texte courant, fonds, bordures
        warm: {
          50:  '#faf7f2',
          100: '#f3ede2',
          200: '#e6dac5',
          500: '#a0895f',
          600: '#7c6a48',
          700: '#5f5138',
          800: '#3d3423',
          900: '#241f16',
        },
        // Navy (structure) — sections sombres, en-tête/pied de page
        navy: {
          50:  '#eef1f6',
          100: '#d7dfea',
          200: '#afc0d9',
          600: '#253c5b',
          700: '#1b2e4d',
          800: '#101a2c',
          900: '#0a1220',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
