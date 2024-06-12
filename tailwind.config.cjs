const config = {
  content: ['./src/**/*.{html,js,svelte,ts}', './node_modules/flowbite-svelte/**/*.{html,js,svelte,ts}'],

  plugins: [require('flowbite/plugin')],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {

        primary: {  //green
          50: '#0a5c0d',
          100: '#0a3e0c',
          200: '#0a5c0d',
          300: '#0a5c0d',
          400: '#0a5c0d',
          500: '#0a5c0d',
          600: '#0a5c0d',
          700: '#0a5c0d',
          800: '#0a5c0d',
          900: '#0a5c0d'
        },

        secondary: { //grey
          50: '#4D5061',
          100: '#4D5061',
          200: '#4D5061',
          300: '#4D5061',
          400: '#4D5061',
          500: '#4D5061',
          600: '#4D5061',
          700: '#4D5061',
          800: '#4D5061',
          900: '#4D5061'
        },

        pop: {  //orange
          50: '#EC4E20',
          100: '#EC4E20',
          200: '#EC4E20',
          300: '#EC4E20',
          400: '#EC4E20',
          500: '#EC4E20',
          600: '#EC4E20',
          700: '#EC4E20',
          800: '#EC4E20',
          900: '#EC4E20'
        }
      }
    }
  }
};

module.exports = config;