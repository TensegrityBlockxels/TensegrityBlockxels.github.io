const pluginRss = require("@11ty/eleventy-plugin-rss");
module.exports = function(eleventyConfig) {
	eleventyConfig.addPlugin(pluginRss);

	eleventyConfig.addFilter("excerpt", (post) => {
		const content = post.replace(/(<([^>]+)>)/gi, "");
		return content.substr(0, content.lastIndexOf(" ", 200)) + "...";
	});

	eleventyConfig.addPassthroughCopy("src/styles/*.css");
	eleventyConfig.addPassthroughCopy("src/scripts/*.js");



	eleventyConfig.setBrowserSyncConfig({
		middleware: [
			function (req, res, next) {
				if (/^[^.]+$/.test(req.url)) {
					res.setHeader('Content-Type', 'text/html; charset=utf-8');
				}
				next();
			}
		]
	});

  return {
	htmlTemplateEngine: "njk",
	markdownTemplateEngine: "njk",
	dir: {
	  input: "src",
	  output: "build"
	}
  }
};
