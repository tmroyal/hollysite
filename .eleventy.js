module.exports = function(eleventyConfig) {
  eleventyConfig.addGlobalData("layout", "index.html");
  eleventyConfig.addPassthroughCopy('styles.css');
};
