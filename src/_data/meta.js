const packageObj = require("../../package.json");

module.exports = {
	pkv: packageObj.version || "v1",
	url: process.env.URL || "https://www.afrania.de/",
	siteName: "Landsmannschaft Afrania im CC zu Heidelberg",
	siteDescription: "Webpage meiner lieben Afrania zu Heidelberg",
	siteType: "Organisation", // schema
	locale: "de_DE",
	lang: "de",
	skipContent: "Direkt zum Inhalt springen",
	author: "Holger Hellinger",
	authorEmail: "hhellinger@afrania.de",
	authorWebsite: "http://holger-hellinger.de",
	themeColor: "#095e09",
	themeBgColor: "#EEEEEE",
	meta_data: {
		opengraph_default: "/assets/images/wappen.png",
		twitterSite: "https://twitter.com/Landsmannschaft",
		twitterCreator: "",
		mastodonProfile: "", // i.e. https://front-end.social/@lene - url to your mastodon instance/profile
	},
	address: {
		// edit all presets or leave empty. They are being used in the pages for privacy.md and imprint.md
		firma: "Landsmannschaft Afrania",
		street: "Schlossberg 55",
		city: "Heidelberg",
		state: "BW",
		zip: "69117",
		mobileDisplay: "0622122427",
		mobileCall: "+49622122427",
		email: "landsmannschaft@afrania.de",
		cif: "",
	},
	menu: {
		closedText: "Navigation",
	},
};
