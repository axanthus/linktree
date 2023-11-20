/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['avatars.githubusercontent.com', 'mysyllabi.up.railway.app', 'upload.wikimedia.org'], //for optimizing image fetching
  }
}

module.exports = nextConfig
