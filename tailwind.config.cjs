/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			colors: {
				Very_Dark_Grayish_Blue: "hsl(217, 19%, 35%)",
				Desaturated_Dark_Blue: "hsl(214, 17%, 51%)",
				Grayish_Blue: "hsl(212, 23%, 69%)",
				Light_Grayish_Blue: "hsl(210, 46%, 95%)",
			},
      fontFamily: {
        sans: ['Manrope', 'sans-serif'],
      }
		},
	},
	plugins: [],
};
