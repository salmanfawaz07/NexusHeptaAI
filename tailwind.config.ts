import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
// tailwind.config.ts
theme: {
  extend: {
    animation: {
      'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      'glow': 'glow 4s ease-in-out infinite',
    },
    keyframes: {
      glow: {
        '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
        '50%': { opacity: '0.6', transform: 'scale(1.2)' },
      }
    }
  }
}