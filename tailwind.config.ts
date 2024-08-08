import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        'fade-in-from-above': 'fadeInFromAbove 0.5s ease-in forwards',
        'fade-in-from-left': 'fadeInFromLeft 0.6s ease-in forwards',
        'fade-in-from-left-slower': 'fadeInFromLeft 0.8s ease-in forwards',
      },
      keyframes: {
        fadeInFromAbove: {
          '0%': { opacity: '0', transform: 'translateY(-30px)', },
          '100%': { opacity: '1', transform: 'translateY(0px)', },
        },
        fadeInFromLeft: {
          '0%': { opacity: '0', transform: 'translateX(-50px)', },
          '100%': { opacity: '1', transform: 'translateX(0px)', },
        },
      },
      colors: {
        'white': '#fff',
        'accent-light': '#FFFBDA',
        'accent-default': '#FFC700',
        'accent-dark': '#9C7C08',
        'text': '#181818',
        'secondary-default': '#595958',
      },
    },
  },
  plugins: [],
}
export default config
