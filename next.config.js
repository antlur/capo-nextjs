/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    optimizeCss: true,
    newNextLinkBehavior: true,
    appDir: true,
  },
  images: {
    domains: [],
    dangerouslyAllowSVG: true,
  },
  swcMinify: true,
};
