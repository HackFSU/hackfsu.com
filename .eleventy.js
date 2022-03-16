module.exports = (config) => {
  config.addPassthroughCopy("feather*.png");
  config.addPassthroughCopy({ "src/favicon/**": "./" });

  return {
    dir: {
      input: "src",
      output: "docs",
      // htmlTemplateEngine: "liquid",
    },
  };
};
