module.exports = {
	name: "Frontend Horse", // optional, falls back to object key
	description: "Newsletter for Frontend Developers",
	// skip if localhost
	// skip if this is a new fork of the speedlify (not Zach’s)
	skip: false,
	options: {
		frequency: 60 * 23, // 23 hours
		// Use "run" if the sites don’t share assets on the same origin
		//           and we can reset chrome with each run instead of
		//           each site in every run (it’s faster)
		// Use "site" if sites are all on the same origin and share assets.
		freshChrome: "site"
	},
	urls: [
		"https://frontend.horse/",
		"https://frontend.horse/articles/",
		"https://frontend.horse/issues/",
		// Popular Posts
		"https://frontend.horse/articles/make-gifs-into-letters-with-clip-paths/",
		"https://frontend.horse/articles/creating-3d-illustrations-with-css/",
		"https://frontend.horse/issues/14/",
		"https://frontend.horse/issues/11/",
	]
};
