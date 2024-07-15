/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'very-dark-grayish-blue': 'hsl(217, 19%, 35%)',
				'desaturated-dark-blue': 'hsl(214, 17%, 51%)',
				'grayish-blue': 'hsl(212, 23%, 69%)',
				'light-grayish-blue': 'hsl(210, 46%, 95%)'
			},
			fontFamily: {
				'global': "'Manrope', sans-serif"
			}
		},
	},
	plugins: [],
}
