/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/githubPageForWeHelp',
  assetPrefix: '/githubPageForWeHelp/',
}

module.exports = nextConfig
