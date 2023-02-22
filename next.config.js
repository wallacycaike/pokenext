/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["raw.githubusercontent.com", "nexus.traction.one"],
  },
}

module.exports = nextConfig
