/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'playwrite': ['Playwrite CL', 'cursive'],
        'ruthie': ['Ruthie', 'cursive'],
      },
      colors: {
        'primary': '#2563eb',
        'primary-light': '#3b82f6',
        'secondary': '#64748b',
        'accent': '#e2e8f0',
        'light': '#f8fafc',
        'dark': '#1e293b',
      },
      spacing: {
        '17vh': '17vh',
        '96vh': '96vh',
        '80vh': '80vh',
      },
      borderRadius: {
        '2rem': '2rem',
      },
      borderWidth: {
        '0.1': '0.1rem',
      },
      textDecorationThickness: {
        'thin': '0.1rem',
      },
      textUnderlineOffset: {
        '1rem': '1rem',
      },
    },
  },
  plugins: [],
}

