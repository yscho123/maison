/** @type {import('next').NextConfig} */
const isGithubPages =
  process.env.GITHUB_PAGES === 'true' && process.env.GITHUB_REPOSITORY_NAME

const nextConfig = {
  output: 'export',
  trailingSlash: true,
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(isGithubPages && {
    basePath: `/${process.env.GITHUB_REPOSITORY_NAME}`,
    assetPrefix: `/${process.env.GITHUB_REPOSITORY_NAME}/`,
  }),
}

export default nextConfig
