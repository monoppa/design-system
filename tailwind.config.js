module.exports = {
  purge: ['./pages/**/*.tsx', './src/**/*.tsx'],
  theme: {
    gradients: (theme) => ({
      'primary-700': [theme('colors.primary-700'), theme('colors.indigo-700')],
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
        'indigo-100': '#badefa',
        'indigo-200': '#8fcbf7',
        'indigo-300': '#62b6f4',
        'indigo-400': '#3ea6f2',
        'indigo-500': '#1497f0',
        'indigo-600': '#0e8ae3',
        'indigo-700': '#3119d6',
        'indigo-800': '#0067be',
        'indigo-900': '#00499f',
      },
    },
  },
  variants: {},
  plugins: [require('./plugins/gradients')],
};
