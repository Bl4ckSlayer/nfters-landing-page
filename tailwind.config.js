/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  daisyui: {
    themes: [
      {
        mtheme: {
          primary: "#3D00B7",
          secondary: "#00AC4F",
          accent: "#14C8B0",
          neutral: "#3D4451",
          "base-100": "#FFFFFF",
          error: "#FF002E",
        },
      },
    ],
  },
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
};
