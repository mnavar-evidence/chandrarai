import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#1c1917",
          soft: "#44403c",
          muted: "#78716c",
        },
        paper: {
          DEFAULT: "#faf7f2",
          warm: "#f5f0e8",
          card: "#ffffff",
        },
        clay: {
          DEFAULT: "#a8785a",
          soft: "#c4a484",
          deep: "#8b5e3c",
        },
        sage: {
          DEFAULT: "#7d8a78",
          soft: "#a3aea0",
        },
        blush: {
          DEFAULT: "#c9a9a0",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Georgia", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
