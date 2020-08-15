module.exports = {
  purge: ['./pages/**/*.tsx', './src/**/*.tsx'],
  theme: {
    gradients: (theme) => ({
      'primary-700': [theme('colors.primary-700'), theme('colors.indigo-700')],
      'gray-300': [theme('colors.gray.300'), theme('colors.gray.300')],
    }),
    extend: {
      colors: {
        'primary-100': '#badefa',
        'primary-200': '#8fcbf7',
        'primary-300': '#62b6f4',
        'primary-400': '#3ea6f2',
        'primary-500': '#1497f0',
        'primary-600': '#0e8ae3',
        'primary-700': '#0478d0',
        'primary-800': '#0067be',
        'primary-900': '#00499f',

        'secondary-100': '#aeebe5',
        'secondary-200': '#73ded5',
        'secondary-300': '#04d0c2',
        'secondary-400': '#00c4b3',
        'secondary-500': '#00b6a3',
        'secondary-600': '#00a894',
        'secondary-700': '#009782',
        'secondary-800': '#008672',
        'secondary-900': '#006953',

        'indigo-100': '#d1c1f6',
        'indigo-200': '#b298f1',
        'indigo-300': '#916ced',
        'indigo-400': '#764ae9',
        'indigo-500': '#5626e4',
        'indigo-600': '#4821de',
        'indigo-700': '#3119d6',
        'indigo-800': '#0412d0',
        'indigo-900': '#0000c9',
      },
    },
  },
  variants: {},
  plugins: [require('./plugins/gradients')],
};
