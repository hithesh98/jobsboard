const fs = require("fs");

module.exports = {
  reactStrictMode: true,
  env: {
    viralloop: fs.readFileSync("./lib/viralloop.js").toString(),
  },
  images: {
    domains: [
      "images.unsplash.com",
      "res-3.cloudinary.com",
      "hithesh98.github.io",
    ],
  },
};
