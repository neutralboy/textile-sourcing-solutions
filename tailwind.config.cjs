const config = {
	mode: "jit",
	purge: [
		"./src/**/*.{html,js,svelte,ts}",
	],
	theme: {
		fontFamily: {
			body: ['Roboto', 'sans-serif'],
			display: ['Roboto', 'sans-serif']
		},
		extend: {
			colors: {
				'tss-200': "#F4FBFA",
				'tss-600': "#11b09f",
				'tss-400': "#30D8C6",
				'tss-accent': "#0E448B"
			},
			// keyframes: {
			// 	fadeIn: {
			// 		"fade"
			// 	}
			// }
		},
	},
	plugins: [],
};

module.exports = config;
