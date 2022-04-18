/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["images.unsplash.com"],
  },
  i18n: {
    locales: ["en-US"],
    defaultLocale: "en-US",
  },
};

module.exports = nextConfig;
