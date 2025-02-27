/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets.aceternity.com",
      },
    ],
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
  },
}

export default nextConfig
