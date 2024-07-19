/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  redirects : async () => [{source : "/react" , destination : "/next" , permanent: false}]
}

module.exports = nextConfig
