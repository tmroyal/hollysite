const path = require("path");
const fs = require("fs");

function isImage(path) {
  const formats = ["jpg", "jpeg", "png", "gif"];
  return formats.includes(path.split(".").pop());
}

module.exports = function (eleventyConfig) {
  // filter to keep last worf of a path
  eleventyConfig.addFilter("lastWord", function (value) {
    return value.split("/").pop();
  });

  eleventyConfig.addGlobalData("layout", "index.html");
  eleventyConfig.addPassthroughCopy("styles.css");
  eleventyConfig.addPassthroughCopy("photos");

  eleventyConfig.addFilter("render_image", function (value) {
    return `<img src="/${value}" alt="Image from work of Holly Bee Gardens" />`;
  });

  // set photo filenames to data
  eleventyConfig.addCollection("photos", function (collection) {
    const dirPath = "./photos";
    const files = fs.readdirSync(dirPath);
    const filePaths = [];

    files.forEach((file) => {
      const filePath = path.join(dirPath, file);
      const stat = fs.statSync(filePath);

      console.log(filePath);

      if (stat.isFile() && isImage(filePath)) {
        filePaths.push(filePath);
      } else if (stat.isDirectory()) {
        filePaths.push(...getAllFilesInDir(filePath));
      }
    });

    return filePaths;
  });

  eleventyConfig.addFilter("prettyDebug", function (value) {
    return JSON.stringify(value, null, 2);
  });

  eleventyConfig.addFilter("showKeys", function (value) {
    return Object.keys(value);
  });
};
