/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				times: ['"Times New Roman"', 'serif'],
				body: ['"Space Grotesk"', 'serif'],
				display: ['"Syne"', 'serif'],
			},
		},
	},
	plugins: [],
};
