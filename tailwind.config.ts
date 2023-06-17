import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Comic Sans MS", "sans-serif"],
    },
    extend: {},
  },
  plugins: [],
} satisfies Config;
