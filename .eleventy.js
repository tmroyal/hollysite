module.exports = function (eleventyConfig) {
  // filter to keep last worf of a path
  eleventyConfig.addFilter("lastWord", function (value) {
    return value.split("/").pop();
  });

  eleventyConfig.addGlobalData("layout", "index.html");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("photos");
};
