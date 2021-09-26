const fs = require('fs');

module.exports = {
  reactStrictMode: true,
  env: {
    drift: fs.readFileSync('./lib/drift.js').toString()
  },
  images: {
    domains: ['images.unsplash.com', 'res-3.cloudinary.com'],
  },
}
