// tailwind.config.js
module.exports = {
  theme: {
    textShadow: {
      'default': '2px 2px 0 #000'
    },
    extend: {
      backgroundImage: {
        'hero-bg': 'url("https://cdn.pixabay.com/photo/2015/07/10/15/42/ford-839538_1280.jpg")'
      },

    }
  },
  plugins: [
    require('tailwindcss-textshadow'),
    require('@tailwindcss/typography')
  ]
}
