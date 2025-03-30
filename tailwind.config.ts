import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        DEFAULT: {
          width: "8px",
          height: "8px",
        },
        track: {
          background: "#f1f1f1",
        },
        thumb: {
          background: "#B80000",
          borderRadius: "4px",
        },
        thumbHover: {
          background: "#B80000",
        },
      },
      colors: {
        primary100: "#B80000",
        primary80: "#db0000",
        primary60: "#ff5454",
        primary40: "#ff9292",
        primary20: "#ffbfbf",
        sencondary100: "#00B878",
        sencondary80: "#00835a",
        sencondary60: "#00a46b",
        sencondary40: "#00a46b",
        sencondary20: "#ffbfbf",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
} satisfies Config;
