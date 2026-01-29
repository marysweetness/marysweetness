module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy("assets/**/*.{jpg,JPG,jpeg,JPEG,png,PNG,gif,GIF}");

  return {
    dir: {
      input: ".",
      output: "_site"
    }
  };
};
