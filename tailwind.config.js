const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
content: ["./**/*.{html,js}"],
plugins: [
    require('@tailwindcss/forms'),
],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
    },
  },
}