import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/shared/components/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        'lt-color-green-100': '#00bb2d',
        'lt-color-green-200': '#19c919',
        'dk-color-green-100': '#006100',

        'lt-color-gray-100': '#ededed',
        'dk-color-gray-100': '#bbb',

        'dk-color-blue-100': '#4040fb',
        'dk-color-blue-200': '#1C567D',
        'lt-color-blue-100': '#5ab2da',

        'lt-color-orange-100': '#ffa333',

        'dk-color-purple-100': '#8a2be2',

        'lt-color-yellow-100': '#f7d547',

        'lt-color-pink-100': '#ed58a4',

        'dk-color-red-100': '#cf010b',

        'tr-color-white-100': 'rgba(255, 255, 255, 0.7)',
        'lt-color-white-100': '#f8f9fa'
      }
    }
  },
  plugins: []
}
export default config
