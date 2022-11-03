const path = require("path");
const nextConfig = {
  sassOptions: {
    images: {
      loader: "akamai",
      pathL: "/",
    },
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "styles/_variables.scss"; @import "styles/_variables.scss";`,
  },
};

module.exports = nextConfig;
