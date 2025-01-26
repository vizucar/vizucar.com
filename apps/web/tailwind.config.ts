import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      screens: {
        'custom-sm': '530px', 
      },
      backgroundSize: {
        'zoom-135': '135%',
        'zoom-130': '130%',
      },
      width: {
        "2/10": "20%",
        "2.5/10": "25%",
        "3/10": "30%",
        "4/10": "40%",
        "6.5/10": "65%",
        "6.8/10": "68%",
        "7/10": "70%", 
        "8.5/10":"85%",
        "8/10":"80%",
        "9/10":"90%",
      },
      spacing: {
        '1/10': '10%', 
        '1.2/10': '12%', 
        '1.5/10': '15%', 
        '1.7/10': '17%', 
        '2/10': '20%',
        '3/10': '30%',
        '5/10': '50%',  
        '6/10': '60%',  
        '7/10': '70%',
        '15': '3.75rem',
        '50': '13rem',        
      },
      fontSize: {
        'xxs': '0.6rem', 
        'xxxs': '0.5rem', 
      },

      keyframes: {
        forward: {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(-100%)" },
        },

        backward: {
          "100%": { transform: "translateX(100%)" },
          "0%": { transform: "translateX(-100%)" },
        },
      },
      animation: {
        forward: "forward 40s linear infinite",
        backward: "backward 40s linear infinite",
      },
      gradientColorStops: {
        transparentBlack: "rgba(0, 0, 0, 0)",
        fullBlack: "black",
      },
    },
  },
  plugins: [],
} satisfies Config;
