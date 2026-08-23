import preset from './design-tokens.mjs';

/** @type {import('tailwindcss').Config} */
export default {
  presets: [preset],
  content: ['./src/**/*.{astro,html,js,ts,md,mdx}'],
  plugins: [],
};
