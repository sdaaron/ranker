/** @type {import('next').NextConfig} */
const nextConfig = {
  //   env: {
  //     AGENT_REQUEST_ENDPOINT: process.env.AGENT_REQUEST_ENDPOINT,
  //   },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
      {
        protocol: "http",
        hostname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
