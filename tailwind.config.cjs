/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				times: ['"Times New Roman"', 'serif'],
				body: ['"DM Sans"', 'sans-serif'],
				heading: ['"DM Mono"', 'serif'],
			},
		},
	},
	plugins: [],
};
