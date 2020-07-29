const withPWA = require("next-pwa");

module.exports = withPWA({
	pwa: {
		dest: "public",
	},
	async redirects() {
		return [
			{
				source: "/",
				destination: "/restaurants",
				permanent: true,
			},
		];
	},
});
