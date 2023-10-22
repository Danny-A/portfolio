/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    colors: {
      'primary-400': '#f08080',
      'primary-700': '#ff4500',
      secondary: '#7e5bef',
      'green-400': '#41985b',
      'green-950': '#132411',
      'gray-100': '#dcdcdc',
      'gray-200': '#848484',
      'gray-950': '#121212',
    },
    extend: {
      fontFamily: {
        moderat: ['Moderat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
