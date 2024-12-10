import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        sans: ["Noto Sans Thai", "sans-serif"],
      },
      fontSize: {
        xs: ['14px', { lineHeight: '21px', fontWeight: '500' }],
        sm: ['16px', { lineHeight: '24px', fontWeight: '500' }],
        md: ['20px', { lineHeight: '30px', fontWeight: '500' }],
        lg: ['28px', { lineHeight: '42px', fontWeight: '500' }],
        xl: ['32px', { lineHeight: '48px', fontWeight: '500' }],
      },      
    },
  },
  plugins: [],
} satisfies Config;
