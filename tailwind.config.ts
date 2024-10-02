import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        green01:"#589E67",
        green02:"#9BC5A4",  
        green03:"#EEF5F0",
        green04:"#233F29",
        greenBlack01:"#0000",
        greenBlack02:"#6D7076",   
        greenBlack03:"#D9DFEB",
        greenBlack04:"#E8ECF3" 
      }
    },
  },
  plugins: [],
};
export default config;
