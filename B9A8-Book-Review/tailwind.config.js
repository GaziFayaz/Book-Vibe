/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {},
    colors: {
			...colors,
      default: "#23BE0A"
    },
		fontFamily: {
			work: ["Work Sans", 'sans-serif'],
			playfair: ["Playfair Display", 'serif']
		}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["light"],
	},
};
