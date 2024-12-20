/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js',
  },
  basePath: process.env.NODE_ENV === 'production' ? '/githubPageForWeHelp' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/githubPageForWeHelp/' : '',
}

module.exports = nextConfig
