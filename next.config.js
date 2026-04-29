/** @type {import('next').NextConfig} */
const nextConfig = {
  sassOptions: {
    includePaths: ['./styles', './src/common/styles'],
    prependData: `@import 'colors.scss';`,
  },
  images: {
    domains: ['dummyjson.com', 'via.placeholder.com', 'randomuser.me'],
  },
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig
