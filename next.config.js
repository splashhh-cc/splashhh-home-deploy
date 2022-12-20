/** @type {import('next').NextConfig} */

const repo = 'splashhh-home-deploy'
const assetPrefix = `/${repo}/`
const basePath = `/${repo}`

const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    minimumCacheTTL: 60,
  },

  assetPrefix: assetPrefix,
  basePath: basePath,
}
module.exports = nextConfig
