module.exports = function(eleventyConfig) {
	eleventyConfig.addPassthroughCopy("src/styles/*.css");

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
