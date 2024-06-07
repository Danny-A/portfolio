/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
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
      fontFamily: {
        moderat: ['var(--font-moderat)'],
      },
      boxShadow: {
        'elevation-high':
          '.5px .5px .7px hsl(var(--shadow-color) / .029), 1.2px 1.2px 1.6px -.5px hsl(var(--shadow-color) / .027), 2.2px 2.1px 2.9px -.9px hsl(var(--shadow-color) / .025), 3.7px 3.6px 4.8px -1.4px hsl(var(--shadow-color) / .023), 6.2px 6px 8.1px -1.9px hsl(var(--shadow-color) / .2), 10px 9.8px 13.1px -2.3px hsl(var(--shadow-color) / .018), 15.6px 15.2px 20.4px -2.8px hsl(var(--shadow-color) / .016), 23.3px 22.7px 30.5px -3.3px hsl(var(--shadow-color) / .014), 33.5px 32.7px 43.9px -3.7px hsl(var(--shadow-color) / .01)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),

    function ({ addBase, theme }) {
      addBase({
        'h1, h2, h3, h4, h5, h6': {
          fontFamily: theme('fontFamily.moderat'),
        },
      });
    },
  ],
};
