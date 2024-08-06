import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
