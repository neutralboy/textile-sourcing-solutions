const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		fontFamily: {
			body: ['Noto Sans Display', 'sans-serif'],
			display: ['Oswald', 'sans-serif']
		},
		extend: {
			colors: {
				'tss-200': "#F4FBFA",
				'tss-600': "#11b09f",
				'tss-accent': "#0E448B"
			}
		},
	},
	plugins: [],
};

module.exports = config;
