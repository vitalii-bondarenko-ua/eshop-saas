const { styles } = require('./src/brandConfig');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './{src,pages,components,app}/**/*.{ts,tsx,js,jsx,html}',
    './src/**/*.{ts,tsx,js,jsx}',
    '!./{src,pages,components,app}/**/*.{stories,spec}.{ts,tsx,js,jsx,html}',
    //     ...createGlobPatternsForDependencies(__dirname)
  ],
  theme: {
    fontWeight: {
      regular: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extraBold: '900',
    },
    spacing: {
      0: '0',
      0.25: '0.0625rem', // 1px
      0.5: '0.125rem', // 2px
      1: '0.25rem', // 4px
      1.5: '0.375rem', // 6px
      2: '0.5rem', // 8px
      3: '0.75rem', // 12px
      4: '1rem', // 16px
      5: '1.25rem', // 20px
      6: '1.5rem', // 24px
      7: '1.75rem', // 28px
      8: '2rem', // 32px
      9: '2.25rem', // 36px
      10: '2.5rem', // 40px
      11: '2.75rem', // 44px
      12: '3rem', // 48px
      13: '3.25rem', // 52px
      14: '3.5rem', // 56px
      15: '3.75rem', // 60px
      16: '4rem', // 64px
      18: '4.5rem', // 72px
      20: '5rem', // 80px
      21: '5.25rem', // 84px
      22: '5.5rem', // 88px
      23: '5.75rem', // 92px
      24: '6rem', // 96px
      30: '7.5rem', // 120px
    },
    gap: ({ theme }) => theme('spacing'),
    margin: ({ theme }) => ({
      auto: 'auto',
      full: '100%',
      ...theme('spacing'),
    }),
    padding: ({ theme }) => ({
      auto: 'auto',
      full: '100%',
      ...theme('spacing'),
    }),
    height: ({ theme }) => ({
      auto: 'auto',
      ...theme('spacing'),
      screen: '100vh',
      full: '100%',
      fit: 'fit-content',
    }),
    width: ({ theme }) => ({
      fit: 'fit-content',
      auto: 'auto',
      full: '100%',
      '1/2': '50%',
      '1/3': '33.333333%',
      '2/3': '66.666667%',
      '4/5': '80%',
      ...theme('spacing'),
    }),
    extend: {
      fontFamily: {
        Roboto: ['var(--font-roboto)'],
        Poppins: ['var(--font-poppins)'],
      },
      colors: styles.colors,
    },
  },
  plugins: [],
};
