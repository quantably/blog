module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: '#FAF7F2',
        surface: '#F2EDE6',
        'surface-hover': '#EBE5DC',
        edge: '#DDD6CB',
        'edge-light': '#E8E2D9',
        'text-main': '#1A1612',
        'text-mid': '#4A4339',
        'text-dim': '#7A7168',
        'text-faint': '#A89E94',
        accent: '#2A7A6E',
        'accent-soft': 'rgba(42, 122, 110, 0.75)',
      },
      fontFamily: {
        sans: ["'DM Sans'", "-apple-system", "sans-serif"],
        serif: ["'Playfair Display'", "Georgia", "serif"],
      },
      typography: {
        DEFAULT: {
          css: {
            '--tw-prose-body': '#4A4339',
            '--tw-prose-headings': '#1A1612',
            '--tw-prose-links': '#2A7A6E',
            '--tw-prose-bold': '#1A1612',
            '--tw-prose-code': '#2A7A6E',
            '--tw-prose-pre-bg': '#F2EDE6',
            '--tw-prose-pre-code': '#1A1612',
            '--tw-prose-hr': '#DDD6CB',
            '--tw-prose-quotes': '#4A4339',
            '--tw-prose-quote-borders': '#2A7A6E',
            '--tw-prose-th-borders': '#DDD6CB',
            '--tw-prose-td-borders': '#DDD6CB',
            '--tw-prose-counters': '#7A7168',
            '--tw-prose-bullets': '#7A7168',
            '--tw-prose-captions': '#7A7168',
            'a': {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            'pre': {
              borderWidth: '1px',
              borderColor: '#DDD6CB',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#4A4339',
            '--tw-prose-headings': '#1A1612',
            '--tw-prose-links': '#2A7A6E',
            '--tw-prose-bold': '#1A1612',
            '--tw-prose-code': '#2A7A6E',
            '--tw-prose-pre-bg': '#F2EDE6',
            '--tw-prose-pre-code': '#1A1612',
            '--tw-prose-hr': '#DDD6CB',
            '--tw-prose-quotes': '#4A4339',
            '--tw-prose-quote-borders': '#2A7A6E',
            '--tw-prose-th-borders': '#DDD6CB',
            '--tw-prose-td-borders': '#DDD6CB',
            '--tw-prose-counters': '#7A7168',
            '--tw-prose-bullets': '#7A7168',
            '--tw-prose-captions': '#7A7168',
            'a': {
              textDecoration: 'none',
              '&:hover': {
                textDecoration: 'underline',
              },
            },
            'pre': {
              borderWidth: '1px',
              borderColor: '#DDD6CB',
            },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
