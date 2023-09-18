/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "i.idefix.com",
      "i1.wp.com",
      "wikimedia.org",
      "img-s3.onedio.com",
      "m.media-amazon.com",
      "nationalismstudies.files.wordpress.com",
      "static.destekdukkan.com",
      "www.indyturk.com",
      "galeri14.uludagsozluk.com",
      "images-eu.ssl-images-amazon.com",
      "perapalace.com",
    ],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
