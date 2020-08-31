module.exports = {
	name: "ATrost.com", // optional, falls back to object key
	description: "Alex Trost's personal site",
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
		"https://atrost.com/",
		"https://atrost.com/posts/",
		"https://atrost.com/til/",
		"https://atrost.com/contact/",
		// Popular Posts
		"https://www.atrost.com/posts/animating-complex-svg/",
	]
};
