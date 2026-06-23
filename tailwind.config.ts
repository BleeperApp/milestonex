import type { Config } from 'tailwindcss';

export default {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Light theme
        app: {
          background: '#F7F8FA',
          homeBackground: '#F5F5F7',
          zoneHairline: '#E8E8ED',
          surface: '#FFFFFF',
          'secondary-surface': '#EEF1F4',
          text: '#1F2937',
          'text-secondary': '#64748B',
          border: '#DCDEA',
          accent: '#102A43',
          'accent-hover': '#0B1F33',
          success: '#2E7D5B',
          error: '#C0392B',

          // Dark theme
          'background-dark': '#000000',
          'surface-dark': '#162032',
          'secondary-surface-dark': '#1E293B',
          'text-dark': '#F8FAFC',
          'text-secondary-dark': '#94A3B8',
          'border-dark': '#334155',
          'accent-dark': '#1D4ED8',
          'accent-hover-dark': '#2563EB',
          'success-dark': '#22C55E',
          'error-dark': '#EF4444',
        },
      },
      backgroundColor: {
        app: {
          light: '#F7F8FA',
          home: '#F5F5F7',
          surface: '#FFFFFF',
          secondary: '#EEF1F4',
        },
        'app-dark': {
          light: '#000000',
          surface: '#162032',
          secondary: '#1E293B',
        },
      },
      textColor: {
        app: {
          primary: '#1F2937',
          secondary: '#64748B',
        },
        'app-dark': {
          primary: '#F8FAFC',
          secondary: '#94A3B8',
        },
      },
      borderColor: {
        app: {
          light: '#DCDEA',
          dark: '#334155',
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
