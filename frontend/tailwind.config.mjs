/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#2B2D42',
        secondary: '#D80032',
        tertiary: '#8D99AE',
        'accent-red': '#EF233C',
        'accent-light': '#EDF2F4',
      },
    },
  },
  plugins: [],
};
