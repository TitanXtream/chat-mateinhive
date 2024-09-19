import type { Config } from 'tailwindcss';

// red: rgb (248, 113, 113)
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
        center: true,
      },
      colors: {
        primary: {
          dark: '#680F31',
          DEFAULT: '#C50055',
          light: '#E4236C',
          text: '#ffffff',
        },
        brand: {
          gray: {
            'extra-dark': '#545454',
            dark: '#8D8D8D',
            main: '#BFBFBF',
            light: '#E3E3E3',
            'extra-light': '#F1F1F1',
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
