/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'brand-blue':  '#01308A',
        'brand-green': '#10AB67',
        'ink':         '#1A2230',
        'brand-grey':  '#5A6472',
        'light':       '#F2F5FA',
        'dark-navy':   '#081634',
        'dark2':       '#0E2350',
        'ice':         '#C9D6F0',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        display: '-0.03em',
      },
      lineHeight: {
        body: '1.7',
      },
      boxShadow: {
        card: '0 2px 8px rgba(1,48,138,0.06), 0 0 0 1px rgba(1,48,138,0.04)',
        'card-hover': '0 8px 24px rgba(1,48,138,0.12), 0 0 0 1px rgba(1,48,138,0.06)',
        'btn': '0 2px 8px rgba(1,48,138,0.25)',
      },
    },
  },
  plugins: [],
};
