// tailwind.config.js
module.exports = {
  theme: {
    textShadow: {
      'default': '2px 2px 0 #000'
    },
    extend: {
      backgroundImage: {
        'hero-bg': "url('https://bo.factorial.io/sites/default/files/styles/hero_image__large__1x/public/2020-04/_99B5622.jpg.webp?h=b9aa6a85&itok=lx7mK32f')",
      },

    }
  },
  plugins: [
    require('tailwindcss-textshadow')
  ]
}
