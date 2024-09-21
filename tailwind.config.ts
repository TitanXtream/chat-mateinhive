import type { Config } from 'tailwindcss';

// red: rgb (248, 113, 113)
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  future: {
    hoverOnlyWhenSupported: true, // 👈 enable hover only when supported
  },
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
      boxShadow: {
        paper1: '0 1px 1px 0 #00000040',
        paper3: '0 3px 10px 1px #00000020',
      },
      colors: {
        primary: {
          dark: '#680F31',
          DEFAULT: '#C50055',
          light: '#FFE8F0',
          text: '#ffffff',
        },
        success: '#6FCC40',
        'message-sent': '#0094e9',
        // canvas: '#FFFBFD',

        canvas: { DEFAULT: '#FFFBFD', dark: '#fff9fc' },
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
