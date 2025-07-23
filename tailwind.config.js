/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        adlam: ['"ADLaM Display"', 'cursive'],
      },
    },
  },
};
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        spinX: {
          '0%': { transform: 'rotateX(0deg)' },
          '100%': { transform: 'rotateX(360deg)' },
        },
      },
      animation: {
        spinX: 'spinX 2s linear infinite',
      },
    },
  },
  plugins: [],
}
 
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        }
      },
      animation: {
        fadeIn: 'fadeIn 2s ease-out forwards',
      },
    },
  },
  plugins: [],
}
