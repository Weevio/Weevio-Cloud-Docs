/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Set the base path to the repository name for GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/Weevio-Cloud-Docs' : '',
  // Ensure trailing slashes are handled correctly
  trailingSlash: true,
}

export default nextConfig
