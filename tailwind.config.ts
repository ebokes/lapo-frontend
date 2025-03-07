import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        gradient1: "linear-gradient(108.9deg, #614BC3 7.52%, #03A7B4 113.36%)",
        gradient2: "linear-gradient(108.9deg, #03A7B4 16.26%, #614BC3 73.12%)",
        gradient3:
          "linear-gradient(233.25deg, #2EA2AB -36.68%, #593FCF 102.87%)",
        gradient4: "linear-gradient(237deg, #F7F4FA 45.83%, #D4CBFF 141.04%)",
        gradient5:
          "linear-gradient(90.06deg, #F8F8F8 23.25%, rgba(243, 241, 251, 0) 44.87%)",
        gradient6: "linear-gradient(122.84deg, #EAE5FF 20.8%, #E4F8F9 99.96%)",
      },
      fontFamily: {
        // poppins: ["poppins", "sans"],
        satoshi: "var(--font-satoshi)",
      },
      colors: {
        white1: "#fff",
        black1: "#000000",
        blue1: "#014DAF",
        violet1: "#614BC3",
        violet2: "#BCADFF",
        violet3: "#F1EAFF",
        violet4: "#5234D6",
        violet5: "#F2EFFF",
        violet6: "#F7F5FF",
        orange1: "#FF593A",
        orange2: "#FCF3E3",
        orange3: "#FF690A",
        orange4: "#F36F56",
        gray1: "#f7faff",
        gray2: "#E2E2E2",
        gray3: "#808080",
        gray4: "#F1F7FF",
        gray5: "#0000008f",
        gray6: "#757588",
        gray7: "#F5F5F4",
        gray8: "#3F3F46",
        green1: "#EFFAF6",
        green2: "#29A174",
        green3: "#29A174",
        yellow1: "#E59100",
        red1: "#E92500",
        red2: "#FFF5F5",
        grey1: "#8D8D8D",
        grey2: "#A0A0AB",
        grey3: "#FAFAF9",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
