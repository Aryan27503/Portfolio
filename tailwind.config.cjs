module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#4f46e5',
        electric: '#3b82f6',
        background: '#0a0a0a'
      },
      fontFamily: {
        heading: ['Space Grotesk', 'Inter', 'ui-sans-serif', 'system-ui'],
        body: ['Inter', 'ui-sans-serif', 'system-ui']
      },
      textColor: {
        'theme-primary': 'rgb(var(--text-primary) / <alpha-value>)',
        'theme-secondary': 'rgb(var(--text-secondary) / <alpha-value>)',
        'theme-tertiary': 'rgb(var(--text-tertiary) / <alpha-value>)'
      },
      backgroundColor: {
        'theme-bg': 'rgb(var(--bg-primary) / <alpha-value>)',
        'theme-card': 'rgb(var(--bg-card) / <alpha-value>)'
      }
    }
  },
  plugins: []
}
